CREATE DATABASE IF NOT EXISTS companydb;

USER companydb;

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) DEFAULT NULL,
    salary INT DEFAULT NULL
);

INSERT INTO employee(name, salary) VALUES
    ('John Doe', 2100),
    ('Jane Doe', 2500),
    ('John Smith', 3100),
    ('Jane Smith', 3500);