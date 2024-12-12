DROP DATABASE IF EXISTS books_db;

-- TODO: What is the SQL code below doing? creating database books
CREATE DATABASE books_db;

-- TODO: What is the SQL code below doing?
\c books_db;

-- TODO: What is the SQL code below doing? creating biographies table
CREATE TABLE biographies (

  -- TODO: What is the SQL code below doing?
  id INTEGER NOT NULL,

  -- TODO: What is the SQL code below doing? setting a character limit for not null
  name VARCHAR(100) NOT NULL
);

