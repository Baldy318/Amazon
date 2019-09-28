-- Inserted a set of records into the table
DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
 item_id INT NOT NULL AUTO_INCREMENT,
 product_name varchar (45),
 department_name varchar (45),
 price int (100),
 stock_quantity int (100),
 PRIMARY KEY (id)
);

-- Inserted a set of records into the table
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Knicks Jersey', 'Sports', '120', '100');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Basketball', 'Sports', '30', '50');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Baseball', 'Sports', '10', '50'); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Air Conditioners', 'Appliances', '500', '25');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Fans', 'Appliances', '25', '50');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Samsung Galaxy', 'Phones', '725', '20');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Fridge', 'Appliances', '1025', '20');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Couch', 'Furniture', '900', '15'); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Dell Laptop', 'Electronics', '250', '50');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Apple Laptop', 'Electronics', '350', '35'); 

SELECT * FROM products.stock_quantity;