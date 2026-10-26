const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connectionString =
      process.env.MONGODB_URI ||
      process.env.MONGO_URI ||
      'mongodb://127.0.0.1:27017/Nodevember';
    const dbName = process.env.DB_NAME || 'Nodevember';

    const conn = await mongoose.connect(connectionString, {
      dbName,
    });
    console.log(`[MongoDB] Connected successfully to host: ${conn.connection.host}`);
    console.log(`[MongoDB] Active Database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`[MongoDB Connection Error] ${error.message}`);
    console.error(`
      Troubleshooting tips:
      1. If running locally, ensure MongoDB service is started (e.g. 'net start MongoDB' or 'mongod').
      2. If using MongoDB Atlas, check that your IP address is whitelisted (Network Access -> 0.0.0.0/0).
      3. Verify your MONGO_URI in your .env file.
    `);
    // Do not exit process in development immediately to allow API discovery/testing, but log error
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};

module.exports = connectDB;
