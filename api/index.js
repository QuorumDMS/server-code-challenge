// Listen to: 0.0.0.0:8888, (set in ../docker-compose.yaml) available as `process.env.HOST` and `process.env.PORT` here

// restify: await server.listen(process.env.PORT, process.env.HOST);
// express: await app.listen(process.env.PORT, process.env.HOST);
// fastify: await fastify.listen(process.env.PORT, process.env.HOST);

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
