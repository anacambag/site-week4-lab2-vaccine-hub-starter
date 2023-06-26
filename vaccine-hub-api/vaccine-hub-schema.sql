CREATE TABLE users(
    id      VARCHAR(20) PRIMARY KEY,
    password  VARCHAR(20) NOT NULL,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    email     VARCHAR(50) NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    location VARCHAR(20) NOT NULL,
    date TIMESTAMP NOT NULL
);