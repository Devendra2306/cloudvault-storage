const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');

const API_BASE = 'http://localhost:3000/api';

// Test results storage
const testResults = {
  security: [],
  functionality: [],
  performance: [],
  errors: []
};

// Helper to log results
function logResult(category, test, passed, details = '') {
  const result = { test, passed, details, timestamp: new Date().toISOString() };
  testResults[category].push(result);
  console.log(`[${category.toUpperCase()}] ${test}: ${passed ? '✓ PASS' : '✗ FAIL'} ${details ? '- ' + details : ''}`);
}

// Helper to create test files
function createTestFile(filename, content, size) {
  const filePath = path.join(__dirname, 'test-uploads', filename);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  if (size) {
    const buffer = Buffer.alloc(size, 'x');
    fs.writeFileSync(filePath, buffer);
  } else {
    fs.writeFileSync(filePath, content || 'test content');
  }
  return filePath;
}

// Helper to upload file
async function uploadFile(filePath, fieldName = 'file') {
  const form = new FormData();
  form.append(fieldName, fs.createReadStream(filePath));
  
  const response = await axios.post(`${API_BASE}/upload`, form, {
    headers: form.getHeaders()
  });
  return response.data;
}

// Helper to upload multiple files
async function uploadMultipleFiles(filePaths) {
  const form = new FormData();
  filePaths.forEach((filePath, index) => {
    form.append('files', fs.createReadStream(filePath));
  });
  
  const response = await axios.post(`${API_BASE}/upload/multiple`, form, {
    headers: form.getHeaders()
  });
  return response.data;
}

// Helper to list files
async function listFiles() {
  const response = await axios.get(`${API_BASE}/files`);
  return response.data;
}

// Helper to get signed URL
async function getSignedUrl(key, expires) {
  const response = await axios.get(`${API_BASE}/files/signed-url`, {
    params: { key, expires }
  });
  return response.data;
}

// Helper to delete file
async function deleteFile(key) {
  const response = await axios.delete(`${API_BASE}/files`, {
    data: { key }
  });
  return response.data;
}

// SECURITY TESTS
async function testSecurity() {
  console.log('\n=== SECURITY TESTS ===\n');
  
  // Test 1: No authentication on upload endpoint
  try {
    const testFile = createTestFile('security-test-1.txt', 'test');
    await uploadFile(testFile);
    logResult('security', 'Upload without authentication', false, 'Endpoint allows uploads without auth');
  } catch (error) {
    logResult('security', 'Upload without authentication', true, 'Endpoint requires authentication');
  }
  
  // Test 2: Path traversal attack
  try {
    const testFile = createTestFile('../../../etc/passwd', 'test');
    await uploadFile(testFile);
    logResult('security', 'Path traversal attack', false, 'Server accepted path traversal filename');
  } catch (error) {
    logResult('security', 'Path traversal attack', true, 'Server rejected path traversal');
  }
  
  // Test 3: Malicious filename with special characters
  try {
    const testFile = createTestFile('file<script>alert(1)</script>.txt', 'test');
    const result = await uploadFile(testFile);
    logResult('security', 'Malicious filename (XSS)', false, 'Server accepted XSS in filename');
  } catch (error) {
    logResult('security', 'Malicious filename (XSS)', true, 'Server rejected malicious filename');
  }
  
  // Test 4: Null byte injection
  try {
    const testFile = createTestFile('file\x00.txt', 'test');
    await uploadFile(testFile);
    logResult('security', 'Null byte injection', false, 'Server accepted null byte in filename');
  } catch (error) {
    logResult('security', 'Null byte injection', true, 'Server rejected null byte');
  }
  
  // Test 5: Very long filename
  try {
    const longName = 'a'.repeat(1000) + '.txt';
    const testFile = createTestFile(longName, 'test');
    await uploadFile(testFile);
    logResult('security', 'Long filename attack', false, 'Server accepted extremely long filename');
  } catch (error) {
    logResult('security', 'Long filename attack', true, 'Server rejected long filename');
  }
  
  // Test 6: Unsigned file type (executable)
  try {
    const testFile = createTestFile('malicious.exe', 'test');
    await uploadFile(testFile);
    logResult('security', 'Executable file upload', false, 'Server accepted executable file');
  } catch (error) {
    logResult('security', 'Executable file upload', true, 'Server rejected executable');
  }
  
  // Test 7: Missing Content-Type header
  try {
    const response = await axios.post(`${API_BASE}/upload`, 'raw data', {
      headers: { 'Content-Type': 'application/octet-stream' }
    });
    logResult('security', 'Upload without multipart/form-data', false, 'Server accepted non-multipart upload');
  } catch (error) {
    logResult('security', 'Upload without multipart/form-data', true, 'Server rejected non-multipart');
  }
  
  // Test 8: Bucket enumeration via list endpoint
  try {
    const files = await listFiles();
    logResult('security', 'Bucket enumeration protection', false, 'List endpoint exposes all files without auth');
  } catch (error) {
    logResult('security', 'Bucket enumeration protection', true, 'List endpoint requires authentication');
  }
  
  // Test 9: Signed URL with negative expiration
  try {
    await getSignedUrl('test-key', -3600);
    logResult('security', 'Signed URL negative expiration', false, 'Server accepted negative expiration');
  } catch (error) {
    logResult('security', 'Signed URL negative expiration', true, 'Server rejected negative expiration');
  }
  
  // Test 10: Signed URL with extremely long expiration
  try {
    await getSignedUrl('test-key', 3153600000); // 100 years
    logResult('security', 'Signed URL excessive expiration', false, 'Server accepted 100-year expiration');
  } catch (error) {
    logResult('security', 'Signed URL excessive expiration', true, 'Server rejected excessive expiration');
  }
  
  // Test 11: CORS configuration
  try {
    const response = await axios.options(`${API_BASE}/upload`);
    const corsHeaders = response.headers['access-control-allow-origin'];
    logResult('security', 'CORS configuration', corsHeaders === '*', 'CORS allows all origins (*)');
  } catch (error) {
    logResult('security', 'CORS configuration', false, 'Could not verify CORS');
  }
}

// FUNCTIONALITY TESTS
async function testFunctionality() {
  console.log('\n=== FUNCTIONALITY TESTS ===\n');
  
  // Test 1: Upload image file (JPEG)
  try {
    const testFile = createTestFile('test-image.jpg', 'fake image content');
    const result = await uploadFile(testFile);
    logResult('functionality', 'JPEG image upload', true, `Key: ${result.key}`);
  } catch (error) {
    logResult('functionality', 'JPEG image upload', false, error.message);
  }
  
  // Test 2: Upload PDF file
  try {
    const testFile = createTestFile('test-document.pdf', '%PDF-1.4 fake pdf');
    const result = await uploadFile(testFile);
    logResult('functionality', 'PDF document upload', true, `Key: ${result.key}`);
  } catch (error) {
    logResult('functionality', 'PDF document upload', false, error.message);
  }
  
  // Test 3: Upload TXT file
  try {
    const testFile = createTestFile('test-text.txt', 'plain text content');
    const result = await uploadFile(testFile);
    logResult('functionality', 'TXT file upload', true, `Key: ${result.key}`);
  } catch (error) {
    logResult('functionality', 'TXT file upload', false, error.message);
  }
  
  // Test 4: Upload DOCX file
  try {
    const testFile = createTestFile('test-docx.docx', 'PK fake docx');
    const result = await uploadFile(testFile);
    logResult('functionality', 'DOCX file upload', true, `Key: ${result.key}`);
  } catch (error) {
    logResult('functionality', 'DOCX file upload', false, error.message);
  }
  
  // Test 5: Multiple file upload
  try {
    const files = [
      createTestFile('multi-1.txt', 'content 1'),
      createTestFile('multi-2.txt', 'content 2'),
      createTestFile('multi-3.txt', 'content 3')
    ];
    const result = await uploadMultipleFiles(files);
    logResult('functionality', 'Multiple file upload', true, `Uploaded ${result.files.length} files`);
  } catch (error) {
    logResult('functionality', 'Multiple file upload', false, error.message);
  }
  
  // Test 6: List files
  try {
    const result = await listFiles();
    logResult('functionality', 'List files', true, `Found ${result.files.length} files`);
  } catch (error) {
    logResult('functionality', 'List files', false, error.message);
  }
  
  // Test 7: Get signed URL
  try {
    const testFile = createTestFile('signed-url-test.txt', 'test');
    const uploadResult = await uploadFile(testFile);
    const signedUrl = await getSignedUrl(uploadResult.key, 3600);
    logResult('functionality', 'Signed URL generation', true, `URL generated with ${signedUrl.expiresIn}s expiration`);
  } catch (error) {
    logResult('functionality', 'Signed URL generation', false, error.message);
  }
  
  // Test 8: Delete file
  try {
    const testFile = createTestFile('delete-test.txt', 'test');
    const uploadResult = await uploadFile(testFile);
    await deleteFile(uploadResult.key);
    logResult('functionality', 'Delete file', true, 'File deleted successfully');
  } catch (error) {
    logResult('functionality', 'Delete file', false, error.message);
  }
}

// VALIDATION TESTS
async function testValidation() {
  console.log('\n=== VALIDATION TESTS ===\n');
  
  // Test 1: Empty file
  try {
    const testFile = createTestFile('empty.txt', '');
    await uploadFile(testFile);
    logResult('functionality', 'Empty file upload', false, 'Server accepted empty file');
  } catch (error) {
    logResult('functionality', 'Empty file upload', true, 'Server rejected empty file');
  }
  
  // Test 2: Oversized file (>10MB)
  try {
    const testFile = createTestFile('oversized.txt', 'test', 11 * 1024 * 1024);
    await uploadFile(testFile);
    logResult('functionality', 'Oversized file upload', false, 'Server accepted file >10MB');
  } catch (error) {
    logResult('functionality', 'Oversized file upload', true, 'Server rejected oversized file');
  }
  
  // Test 3: Unsupported file type
  try {
    const testFile = createTestFile('test.xyz', 'test');
    await uploadFile(testFile);
    logResult('functionality', 'Unsupported file type', false, 'Server accepted .xyz file');
  } catch (error) {
    logResult('functionality', 'Unsupported file type', true, 'Server rejected .xyz file');
  }
  
  // Test 4: Duplicate filename handling
  try {
    const name = 'duplicate-test.txt';
    const file1 = createTestFile(name, 'content 1');
    const file2 = createTestFile(name, 'content 2');
    const result1 = await uploadFile(file1);
    const result2 = await uploadFile(file2);
    logResult('functionality', 'Duplicate filename handling', result1.key !== result2.key, 'Server generates unique keys');
  } catch (error) {
    logResult('functionality', 'Duplicate filename handling', false, error.message);
  }
  
  // Test 5: Special characters in filename
  try {
    const testFile = createTestFile('file with spaces & symbols!.txt', 'test');
    const result = await uploadFile(testFile);
    logResult('functionality', 'Special characters in filename', true, `Key: ${result.key}`);
  } catch (error) {
    logResult('functionality', 'Special characters in filename', false, error.message);
  }
}

// PERFORMANCE TESTS
async function testPerformance() {
  console.log('\n=== PERFORMANCE TESTS ===\n');
  
  // Test 1: Sequential uploads (50 files)
  try {
    const startTime = Date.now();
    const keys = [];
    for (let i = 0; i < 50; i++) {
      const testFile = createTestFile(`sequential-${i}.txt`, `content ${i}`);
      const result = await uploadFile(testFile);
      keys.push(result.key);
    }
    const duration = Date.now() - startTime;
    const avgTime = duration / 50;
    logResult('performance', '50 sequential uploads', true, `Total: ${duration}ms, Avg: ${avgTime.toFixed(2)}ms/file`);
    
    // Cleanup
    for (const key of keys) {
      await deleteFile(key).catch(() => {});
    }
  } catch (error) {
    logResult('performance', '50 sequential uploads', false, error.message);
  }
  
  // Test 2: Concurrent uploads (10 files)
  try {
    const startTime = Date.now();
    const files = [];
    for (let i = 0; i < 10; i++) {
      files.push(createTestFile(`concurrent-${i}.txt`, `content ${i}`));
    }
    const results = await Promise.all(files.map(f => uploadFile(f)));
    const duration = Date.now() - startTime;
    const avgTime = duration / 10;
    logResult('performance', '10 concurrent uploads', true, `Total: ${duration}ms, Avg: ${avgTime.toFixed(2)}ms/file`);
    
    // Cleanup
    for (const result of results) {
      await deleteFile(result.key).catch(() => {});
    }
  } catch (error) {
    logResult('performance', '10 concurrent uploads', false, error.message);
  }
  
  // Test 3: Large file upload (5MB)
  try {
    const startTime = Date.now();
    const testFile = createTestFile('large-5mb.txt', 'test', 5 * 1024 * 1024);
    const result = await uploadFile(testFile);
    const duration = Date.now() - startTime;
    logResult('performance', '5MB file upload', true, `Duration: ${duration}ms, Rate: ${(5 * 1024 / (duration / 1000)).toFixed(2)} KB/s`);
    await deleteFile(result.key).catch(() => {});
  } catch (error) {
    logResult('performance', '5MB file upload', false, error.message);
  }
  
  // Test 4: List files performance
  try {
    const startTime = Date.now();
    await listFiles();
    const duration = Date.now() - startTime;
    logResult('performance', 'List files endpoint', true, `Duration: ${duration}ms`);
  } catch (error) {
    logResult('performance', 'List files endpoint', false, error.message);
  }
}

// ERROR HANDLING TESTS
async function testErrorHandling() {
  console.log('\n=== ERROR HANDLING TESTS ===\n');
  
  // Test 1: Missing file in upload
  try {
    const form = new FormData();
    await axios.post(`${API_BASE}/upload`, form, { headers: form.getHeaders() });
    logResult('errors', 'Missing file upload', false, 'Server accepted upload without file');
  } catch (error) {
    logResult('errors', 'Missing file upload', error.response?.status === 400, 'Server returns 400 for missing file');
  }
  
  // Test 2: Invalid key parameter
  try {
    await getSignedUrl('');
    logResult('errors', 'Empty key parameter', false, 'Server accepted empty key');
  } catch (error) {
    logResult('errors', 'Empty key parameter', error.response?.status === 400, 'Server returns 400 for empty key');
  }
  
  // Test 3: Missing key in delete
  try {
    await axios.delete(`${API_BASE}/files`, { data: {} });
    logResult('errors', 'Missing key in delete', false, 'Server accepted delete without key');
  } catch (error) {
    logResult('errors', 'Missing key in delete', error.response?.status === 400, 'Server returns 400 for missing key');
  }
  
  // Test 4: Delete non-existent file
  try {
    await deleteFile('non-existent-key-12345.txt');
    logResult('errors', 'Delete non-existent file', false, 'Server reported success for non-existent file');
  } catch (error) {
    logResult('errors', 'Delete non-existent file', true, 'Server returns error for non-existent file');
  }
  
  // Test 5: Invalid expires parameter
  try {
    await getSignedUrl('test-key', 'invalid');
    logResult('errors', 'Invalid expires parameter', false, 'Server accepted invalid expires');
  } catch (error) {
    logResult('errors', 'Invalid expires parameter', true, 'Server handles invalid expires');
  }
}

// Generate reports
function generateReports() {
  console.log('\n=== TEST REPORTS ===\n');
  
  // Security Report
  const securityPassed = testResults.security.filter(r => r.passed).length;
  const securityTotal = testResults.security.length;
  console.log(`Security: ${securityPassed}/${securityTotal} tests passed (${((securityPassed/securityTotal)*100).toFixed(1)}%)`);
  
  // Functionality Report
  const funcPassed = testResults.functionality.filter(r => r.passed).length;
  const funcTotal = testResults.functionality.length;
  console.log(`Functionality: ${funcPassed}/${funcTotal} tests passed (${((funcPassed/funcTotal)*100).toFixed(1)}%)`);
  
  // Performance Report
  const perfPassed = testResults.performance.filter(r => r.passed).length;
  const perfTotal = testResults.performance.length;
  console.log(`Performance: ${perfPassed}/${perfTotal} tests passed (${((perfPassed/perfTotal)*100).toFixed(1)}%)`);
  
  // Error Handling Report
  const errorPassed = testResults.errors.filter(r => r.passed).length;
  const errorTotal = testResults.errors.length;
  console.log(`Error Handling: ${errorPassed}/${errorTotal} tests passed (${((errorPassed/errorTotal)*100).toFixed(1)}%)`);
  
  // Save detailed report
  const reportPath = path.join(__dirname, 'test-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(testResults, null, 2));
  console.log(`\nDetailed report saved to: ${reportPath}`);
}

// Main test runner
async function runTests() {
  try {
    await testSecurity();
    await testFunctionality();
    await testValidation();
    await testPerformance();
    await testErrorHandling();
    generateReports();
  } catch (error) {
    console.error('Test suite error:', error);
  }
}

// Run if executed directly
if (require.main === module) {
  runTests();
}

module.exports = { runTests, testResults };
