# Product Management System

## Overview

This project is a basic Product Management System implemented using Express.js as the backend framework and MySQL as the database. It includes functionalities to add, edit, delete, and display product information.

## Features

- **Add Product**: Users can add new products with details such as Product ID, Name, Quantity, and Price.
- **View Products**: Display a table of existing products with options to edit or delete each entry.
- **Edit Product**: Modify product details such as Name, Quantity, and Price.
- **Delete Product**: Remove a product from the system.

## Technologies Used

- **Express.js**: A web application framework for Node.js.
- **MySQL**: A relational database management system.
- **EJS**: A simple templating language that lets you generate HTML markup with plain JavaScript.
- **Body-Parser**: Middleware to handle HTTP POST requests.
- **Nodemon**: Utility to automatically restart the server during development.

## Learnings

In the process of building this project, I gained insights into the following:

- **Express.js Fundamentals**: Understanding how to set up routes, handle HTTP requests, and manage middleware in Express.
- **MySQL Integration**: Connecting an Express application to a MySQL database and performing CRUD operations.
- **EJS Templating**: Using EJS to render dynamic content on the server side.
- **Middleware Usage**: Incorporating middleware like Body-Parser to handle form submissions.
- **Project Structuring**: Organizing files and structuring the project in a scalable way.
- **Error Handling**: Implementing basic error handling and displaying user-friendly error messages.
- 
## How to Use This Application

1. **Clone the repository:**

   ```bash
   git clone https://github.com/smiteshpatil/product_management_system.git

2. **Install dependencies:** 
   ```bash
  cd product_management_system
  npm install

3.**run this script into your mysql client:**

   ```bash
   create database test;
   use test;
   create table products (pid int, pname varchar(50), qty int, price decimal(10,2));
    
  
4. **Configure MySQL settings in db/dbconnect.js or a separate configuration file.**
   var mysqlConnection = mysql.createConnection({
   host: "127.0.0.1",
   user: "MYSQL_USER_NAME",
   password: "PASSWORD_FOR_MYSQL",
   port: 3306,
   database: "test",
  });

5. **run:**

   ```bash
   node app.js

6. **The application should be accessible at:**
```bash
   http://localhost:9090/products
