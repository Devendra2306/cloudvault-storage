require('dotenv').config();
const { S3Client, ListBucketsCommand } = require('@aws-sdk/client-s3');

async function testAWSConnection() {
  console.log('Testing AWS S3 connection...');
  console.log('AWS Region:', process.env.AWS_REGION);
  console.log('AWS Access Key ID:', process.env.AWS_ACCESS_KEY_ID ? 'Set' : 'Not set');
  console.log('AWS Secret Access Key:', process.env.AWS_SECRET_ACCESS_KEY ? 'Set' : 'Not set');
  console.log('AWS S3 Bucket Name:', process.env.AWS_S3_BUCKET_NAME || 'NOT SET - THIS WILL CAUSE ERRORS');
  
  try {
    const s3 = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    console.log('\nAttempting to list buckets...');
    const command = new ListBucketsCommand({});
    const response = await s3.send(command);
    
    console.log('\n✅ AWS Connection Successful!');
    console.log('Buckets:', response.Buckets?.map(b => b.Name).join(', ') || 'No buckets found');
    
    if (process.env.AWS_S3_BUCKET_NAME) {
      console.log(`\nChecking if bucket "${process.env.AWS_S3_BUCKET_NAME}" exists...`);
      const bucketExists = response.Buckets?.some(b => b.Name === process.env.AWS_S3_BUCKET_NAME);
      if (bucketExists) {
        console.log('✅ Bucket exists and is accessible');
      } else {
        console.log('⚠️ Bucket does not exist or you don\'t have access to it');
      }
    }
    
  } catch (error) {
    console.error('\n❌ AWS Connection Failed:');
    console.error('Error:', error.message);
    console.error('Error Code:', error.name);
    if (error.$metadata) {
      console.error('HTTP Status:', error.$metadata.httpStatusCode);
    }
  }
}

testAWSConnection();
