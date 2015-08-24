'use strict';

var config = {
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'Application port',
    format: 'port',
    default: 3000,
    env: 'LISTEN_PORT'
  },
  host: {
    doc: 'Application host',
    format: 'url',
    default: 'localhost',
    env: 'LISTEN_IP'
  },
  pg: {
    host: {
      doc: 'PG host.',
      format: 'url',
      default: 'localhost',
      env: 'PG_HOST'
    },
    dbname: {
      doc: 'PG database.',
      format: String,
      default: 'demo',
      env: 'PG_DB_NAME'
    },
    password: {
      doc: 'PG Password.',
      format: String,
      default: 'admin',
      env: 'PG_PASSWORD'
    },
    user: {
      doc: 'PG user.',
      format: String,
      default: 'postgres',
      env: 'PG_USER'
    }
  }
};

module.exports = config;
