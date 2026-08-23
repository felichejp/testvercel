const sql = require('./db');

async function testConnection() {
  try {
    const result = await sql`SELECT version()`;
    console.log('✅ Connected to Neon database!');
    console.log('PostgreSQL version:', result[0].version);
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    process.exit(1);
  }
}

testConnection();

