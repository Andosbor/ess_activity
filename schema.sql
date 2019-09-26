DROP DATABASE IF EXISTS ess_db;

CREATE DATABASE ess_db;

USE ess_db;

CREATE TABLE course (
id int(10) unsigned NOT NULL AUTO_INCREMENT,
name varchar(50) COLLATE utf8_bin DEFAULT NULL,
domain varchar(100) COLLATE utf8_bin DEFAULT NULL,
description varchar(100) COLLATE utf8_bin DEFAULT NULL,
PRIMARY KEY (id),
UNIQUE KEY name (name)
);

INSERT into course(id,name,description,domain)
VALUES(1,"test_name","test_description","test_domain");

/*SELECT * FROM course; */

CREATE TABLE test (
id int(10) unsigned NOT NULL AUTO_INCREMENT,
course_id int(10) unsigned NOT NULL,
num_of_questions int(10) unsigned NOT NULL,
name varchar(50) COLLATE utf8_bin DEFAULT NULL,
duration varchar(10) COLLATE utf8_bin DEFAULT NULL,
PRIMARY KEY (id)
);

/*INSERT into test(id,course_id,name,num_of_questions,duration)*/