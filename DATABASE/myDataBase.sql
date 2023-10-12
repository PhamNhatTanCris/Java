CREATE database myDataBase;
use myDataBase;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

INSERT INTO users (username, email)
VALUES
    ('john_doe', 'john@example.com'),
    ('jane_smith', 'jane@example.com');
    
SELECT * FROM users;