# Star Wars Ships Explorer

This project is a **React-based web application** that allows users to explore Star Wars ships, using data from the [SWAPI](https://swapi.dev/) API. Users can view a list of ships, see detailed information about each one, and navigate through different pages. The project also supports pagination, protected routes, and user authentication.

## Features

- Fetch and display a list of Star Wars ships
- View detailed information about each ship
- Pagination support to load more ships
- React Router for navigation between pages
- Protected routes requiring user authentication with Firebase

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/laligb/sp7-star-wars.git
   cd sp7-star-wars
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will run on `http://localhost:5173`.

## API Usage

The project fetches Star Wars ship data from the following sources:

- **Primary API:** [SWAPI](https://swapi.dev/) – for Star Wars ships data
- **Alternative API:** [SWAPI py4e](https://swapi.py4e.com/) – a backup version of SWAPI
- **Images API:** [Star Wars Visual Guide](https://starwars-visualguide.com/) – to fetch images of ships

## Technologies Used

- **React** – Frontend framework for building the user interface
- **React Router** – For navigation between different pages of the application
- **Axios** – For making API requests to fetch ship data and images
- **Redux Toolkit** – For managing global state
- **Firebase** – For user authentication and managing protected routes
- **SWAPI** – Provides Star Wars ships data
- **Star Wars Visual Guide** – A visual guide for Star Wars images

## Live Project

You can view the live project here: [Star Wars Ships Explorer](https://sp7-star-wars.vercel.app/)
