CREATE DATABASE blogpost;
CREATE TABLE users(
    users_id SERIAL PRIMARY KEY,
    author TEXT,
    comment TEXT
);