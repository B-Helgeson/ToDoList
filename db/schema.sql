### Schema 

CREATE DATABASE todo_db;
USE todo_db;

CREATE TABLE todos
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO todos (name) VALUES ('Run a marathon'),('Travel to Paris'),('Read a new book'),('Change my oil');
