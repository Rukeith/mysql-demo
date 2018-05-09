-- Create database.
CREATE SCHEMA IF NOT EXISTS `license` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
-- Create new user.
GRANT ALL PRIVILEGES ON *.* TO 'mysql'@'%' IDENTIFIED BY 'bizcloud';
GRANT ALL PRIVILEGES ON *.* TO 'mysql'@'localhost' IDENTIFIED BY 'bizcloud';
FLUSH PRIVILEGES;