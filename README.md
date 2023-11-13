# assignment
# React E-Commerce Application

Welcome to the React E-Commerce application! This project is a simple e-commerce application built using React, Bootstrap, Font Awesome, and Redux.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Product Page:**
   - Display a list of products with details such as image, title, category, and price.
   - Utilizes Bootstrap for responsive design.

2. **Shopping Cart:**
   - Manage a shopping cart with the ability to add, remove, increment, and decrement product quantities.
   - Uses Redux for state management.

3. **Font Awesome Icons:**
   - Integrates Font Awesome icons for an enhanced user interface.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Damanharneet/assignment.git
2. Navigate to Project Directory  
   cd ecomm
3. Run the application
   ```bash
   npm start

### Project Structure

|-- src/
|   |-- assets/
|       |-- css/
|           |-- style.css
|   |-- components/
|       |-- Product.js
|       |-- Cart.js
|       |-- Layout.js
|   |-- containers/
|       |-- CartItems.js
|       |-- Navbar.js
|       |-- Pagination.js
|       |-- ProductCard.js
|       |-- Star.js
|       |-- TopOfferBar.js
|   |-- Redux/
|       |-- actions/
|           |-- cart.action.js
|           |-- index.js
|           |-- product.action.js
|       |-- reducers/
|           |-- cart.reducer.js
|           |-- index.js
|           |-- product.reducer.js
|       |-- constants/
|           |-- index.js
|--|-- App.js
|--|-- index.js
|-- public/
|-- package.json
|-- README.md


|-- src/
|   |-- assets/
|        |-- css/
|            |-- style.css
|   |-- components/
|       |-- Product.js
|       |-- Cart.js
|       |-- Layout.js
|   |-- containers/
|       |-- CartItems.js
|       |-- Navbar.js
|       |-- Pagination.js
|       |-- ProductCard.js
|       |-- Star.js
|       |-- TopOfferBar.js
|   |-- Redux/
|       |-- actions/
|           |-- cart.action.js
|           |-- index.js
|           |-- product.action.js
|       |-- reducers/
|           |-- cart.reducer.js
|           |-- index.js
|           |-- product.reducer.js
|       |-- constants/
|           |-- index.js
|--|-- App.js
|--|-- index.js
|-- public/
|-- package.json
|-- README.md

### Usuage
Usage
Product Page:
Navigate to the "Products" page to view a list of available products.
Click on a product to add to Cart.

Cart Page:

Visit the "Cart" page to manage your shopping cart.
Add products, increment, decrement, and remove items from the cart.
