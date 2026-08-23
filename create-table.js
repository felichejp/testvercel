const sql = require('./db');

async function createTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS test (
        id SERIAL PRIMARY KEY,
        "user" VARCHAR(255) NOT NULL
      )
    `;
    console.log('✅ Table "test" created successfully!');

    // Verify the table exists
    const result = await sql`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'test'
      ORDER BY ordinal_position
    `;
    console.log('Columns:');
    result.forEach(col => console.log(`  - ${col.column_name} (${col.data_type})`));
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

createTable();

