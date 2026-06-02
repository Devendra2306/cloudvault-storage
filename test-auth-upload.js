require('dotenv').config();
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const http = require('http');

// Create a demo file
const demoContent = 'This is a demo file for testing AWS S3 upload with authentication.';
const demoFilePath = path.join(__dirname, 'demo-auth-test.txt');
fs.writeFileSync(demoFilePath, demoContent);

console.log('Testing authenticated demo file upload to cloud...');

// Step 1: Register a user
const registerData = JSON.stringify({
  email: 'test@example.com',
  password: 'TestPassword123!',
  name: 'Test User'
});

const registerOptions = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/v1/auth/register',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(registerData)
  }
};

let authToken = '';

const req = http.request(registerOptions, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log(`\nRegister Status: ${res.statusCode}`);
    console.log('Register Response:', data);
    
    if (res.statusCode === 201) {
      const response = JSON.parse(data);
      authToken = response.data.accessToken;
      console.log('✅ Registration successful, token obtained');
      testUpload();
    } else {
      console.log('❌ Registration failed, trying login instead...');
      testLogin();
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Register error:', error.message);
  testLogin();
});

req.write(registerData);
req.end();

function testLogin() {
  const loginData = JSON.stringify({
    email: 'test@example.com',
    password: 'TestPassword123!'
  });

  const loginOptions = {
    hostname: 'localhost',
    port: 3001,
    path: '/api/v1/auth/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(loginData)
    }
  };

  const loginReq = http.request(loginOptions, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log(`\nLogin Status: ${res.statusCode}`);
      console.log('Login Response:', data);
      
      if (res.statusCode === 200) {
        const response = JSON.parse(data);
        authToken = response.data.accessToken;
        console.log('✅ Login successful, token obtained');
        testUpload();
      } else {
        console.log('❌ Login failed');
        fs.unlinkSync(demoFilePath);
      }
    });
  });

  loginReq.on('error', (error) => {
    console.error('❌ Login error:', error.message);
    fs.unlinkSync(demoFilePath);
  });

  loginReq.write(loginData);
  loginReq.end();
}

function testUpload() {
  console.log('\n=== Testing File Upload ===');
  console.log('Auth Token:', authToken ? 'Set' : 'Not set');
  
  const form = new FormData();
  form.append('file', fs.createReadStream(demoFilePath));

  const uploadOptions = {
    hostname: 'localhost',
    port: 3001,
    path: '/api/v1/files/upload',
    method: 'POST',
    headers: {
      ...form.getHeaders(),
      'Authorization': `Bearer ${authToken}`
    }
  };

  const uploadReq = http.request(uploadOptions, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log(`\nUpload Status: ${res.statusCode}`);
      console.log('Upload Response:', data);
      
      if (res.statusCode === 201) {
        console.log('\n✅ Demo file uploaded successfully!');
        const response = JSON.parse(data);
        console.log('File ID:', response.data.id);
        console.log('File Name:', response.data.name);
        console.log('S3 Key:', response.data.s3Key);
        console.log('Signed URL:', response.data.signedUrl);
      } else {
        console.log('\n❌ Upload failed with status code:', res.statusCode);
        console.log('This might be the internal server error you mentioned');
      }
      
      // Cleanup
      fs.unlinkSync(demoFilePath);
      console.log('\nDemo file cleaned up.');
    });
  });

  uploadReq.on('error', (error) => {
    console.error('\n❌ Upload error:', error.message);
    fs.unlinkSync(demoFilePath);
  });

  form.pipe(uploadReq);
}
