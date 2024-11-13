# E-Commerce SPA Project

This is a single-page application (SPA) for an e-commerce platform built with React, Vite, Chakra UI, and Tailwind CSS. It allows users to browse products, add them to the cart, and proceed to checkout.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Pages](#pages)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/ecommerce-spa-project.git
    cd ecommerce-spa-project
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```env
    VITE_API_URL=https://dummyjson.com
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

1. Start the development server as described in the [Installation](#installation) section.
2. Open your browser and navigate to `http://localhost:5173`.


## API Endpoints

- `GET /api/products` - Retrieve all products.
- `GET /api/products/:id` - Retrieve a single product by ID.
- `POST /api/cart` - Add a product to the cart.
- `DELETE /api/cart/:id` - Remove a product from the cart.

## Environment Variables

- `VITE_API_URL`: The base URL for the API.
