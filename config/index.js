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
  mysql: {
    host: {
      doc: 'MYSQL host.',
      format: 'url',
      default: 'localhost',
      env: 'MYSQL_HOST'
    },
    dbname: {
      doc: 'MYSQL database.',
      format: String,
      default: 'demo',
      env: 'MYSQL_DB_NAME'
    },
    password: {
      doc: 'MYSQL Password.',
      format: String,
      default: '',
      env: 'MYSQL_PASSWORD'
    },
    user: {
      doc: 'MYSQL user.',
      format: String,
      default: 'root',
      env: 'MYSQL_USER'
    }
  }
};

module.exports = config;
