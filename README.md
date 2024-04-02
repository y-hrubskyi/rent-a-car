# Rent a Car App

This project was bootstrapped with [Vite + React](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react). To get acquainted and configure additional features [refer to documentation](https://vitejs.dev).

## Overview

Rent a Car App is a web application that allows users to browse and rent cars. The platform provides a catalog of available cars, with options to filter by model and rental price. Users can also add cars to their favorites list. Additionally, the project incorporates a responsive design approach to ensure optimal viewing across different devices.

## Preview

Include demo GIF to visually showcase the application.

![Preview](/public/preview.gif)

## Features

- **Car Browsing:**
  Browse a catalog of available cars, filtering by model and rental price.
- **Favorites:**
  Add cars to your favorites list for quick access.
- **Rental Information:**
  View detailed information about each car, including fuel consumption, engine size, and mileage.
- **User-Friendly Interface:**
  Enjoy a seamless experience with an intuitive, attractive and responsive design.

## Tech Stack

- **Frontend:**
  - React: A popular JavaScript library for building user interfaces.
  - Styled Components: For styling and theming components in a dynamic and maintainable way.
  - React Router: Declarative routing in single-page applications.
  - Redux Toolkit: State management library for handling application-level state.
- **Backend:**
  - MockAPI: A tool for creating fake APIs, used for simulating backend functionality during development.
- **Deployment:**
  - GitHub Pages: Hosting platform for deploying the frontend.
- **Version Control:**
  - Git: Distributed version control system for tracking changes in the codebase.
- **Development Tools:**
  - Visual Studio Code: An integrated development environment for efficient coding.
  - GitHub: Version control platform for collaborative development.

## Project Structure

```plaintext
rent-a-car/
|-- public/               # Public assets and files
|-- src/                  # Source code
|   |-- assets/           # Static assets such as images, fonts, etc.
|   |-- components/       # Reusable React components
|   |-- data/             # Data files (e.g., JSON files, mock data)
|   |-- hooks/            # Custom React hooks
|   |-- pages/            # React components representing pages of the app
|   |-- services/         # Services for handling API calls, etc.
|   |-- store/            # Redux store configuration, actions, reducers, etc.
|   |-- styles/           # Global and theme styles
|   |-- utils/            # General utility functions and helper modules
|   |-- App.jsx           # Main App component
|   |-- main.jsx          # Entry point for rendering the React app
|-- package.json          # Project configuration and dependencies
```

## Getting Started

These instructions will help you set up and run the Rent a Car App on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/y-hrubskyi/rent-a-car.git

    cd rent-a-car
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

### Run the application:

1. Run app using following command:

   ```bash
   npm run dev
   ```
