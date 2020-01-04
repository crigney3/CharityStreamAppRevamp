CREATE TABLE IF NOT EXISTS players (
  id char(36) NOT NULL,
  name varchar(256) NOT NULL,
  minecraftUserName varchar(256) NOT NULL,
  PRIMARY KEY (id)
);