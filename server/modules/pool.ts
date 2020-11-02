/* the only line you likely need to change is
 database: 'prime_app',
 change `prime_app` to the name of your database, and you should be all set!
*/

const pg = require('pg');
const url = require('url');

const ENV_CONFIG: object = process.env != null ? process.env : {};

// default configuration for local development
let config: object = {
  host: ENV_CONFIG.DB_HOST ? ENV_CONFIG.DB_HOST : 'localhost', // Server hosting the postgres database
  port: ENV_CONFIG.DB_PORT ? ENV_CONFIG.DB_PORT : 5432, // env var: PGPORT
  database: ENV_CONFIG.DB_NAME ? ENV_CONFIG.DB_NAME : '_mind-vineyard', // CHANGE THIS LINE! env var: PGDATABASE, this is likely the one thing you need to change to get up and running
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

// configuration settings for Heroku
if (process.env.DATABASE_URL) {
  // Heroku gives a url, not a connection object
  // https://github.com/brianc/node-pg-pool
  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true, // heroku requires ssl to be true
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };
}

// this creates the pool that will be shared by all other modules
const pool: pg.Pool = new pg.Pool(config);

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});

pool.on('connect', () => {
  console.log('Pool connected');
});

module.exports = pool;