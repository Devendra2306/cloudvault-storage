require('dotenv').config();
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const http = require('http');

// Create a demo file
const demoContent = 'This is a demo file for testing AWS S3 upload.';
const demoFilePath = path.join(__dirname, 'demo-test-file.txt');
fs.writeFileSync(demoFilePath, demoContent);

console.log('Testing demo file upload to cloud...');
console.log('Server URL: http://localhost:3001/api/upload');

const form = new FormData();
form.append('file', fs.createReadStream(demoFilePath));

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/upload',
  method: 'POST',
  headers: form.getHeaders()
};

const req = http.request(options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(`\nStatus Code: ${res.statusCode}`);
    console.log('Response:', data);
    
    if (res.statusCode === 201) {
      console.log('\n✅ Demo file uploaded successfully!');
      const response = JSON.parse(data);
      console.log('File Key:', response.key);
      console.log('Signed URL:', response.signedUrl);
    } else {
      console.log('\n❌ Upload failed with status code:', res.statusCode);
    }
    
    // Cleanup
    fs.unlinkSync(demoFilePath);
    console.log('\nDemo file cleaned up.');
  });
});

req.on('error', (error) => {
  console.error('\n❌ Upload error:', error.message);
  fs.unlinkSync(demoFilePath);
});

form.pipe(req);
