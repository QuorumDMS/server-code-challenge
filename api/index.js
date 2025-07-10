// Listen to: 0.0.0.0:8888, (set in ../docker-compose.yaml) available as `process.env.HOST` and `process.env.PORT` here
// example: await server.listen(process.env.PORT, process.env.HOST);

// Connect to the database using the `database` in this file `postgres://test:test@database:5432/challenge`
// The `database` host will only work inside of the docker container, otherwise use localhost:5432 on your local
/* Using node-pg, this object will connect to the database:
{
  user: 'test',
  host: 'database',
  database: 'challenge',
  password: 'test',
  port: 5432,
}
*/

const express = require('express');
const { Pool } = require('pg');
const app = express();


const port = process.env.PORT.toString();

const pool = new Pool({
  user: 'test',
  host: 'database',
  database: 'challenge',
  password: 'test',
  port: `${port}` || '5432', // Default to 5432 if PORT is not set
});

app.get('/', (req, res) => {
  res.send('Welcome to the Dealer API');
});

app.get('/dealers', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM dealer');
    res.send(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 8888;
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
