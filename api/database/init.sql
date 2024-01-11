CREATE DATABASE taksmanagerDB;
CREATE USER teste WITH ENCRYPTED PASSWORD 'senha';
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
ALTER ROLE teste SET client_encoding TO 'utf8';
ALTER ROLE teste SET default_transaction_isolation TO 'read committed';
ALTER ROLE teste SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE taksmanagerDB TO teste;