# 🍴 Le Bistrot Gourmand

Welcome to the official repository of Le Bistrot Gourmand's website! This website is built using [Strapi](https://strapi.io/), a powerful open-source headless CMS, and [React](https://reactjs.org/) for the front-end, allowing us to manage content effortlessly and deliver a seamless user experience.

## 🚀 Getting Started

Follow these steps to set up the project on your local machine.

### 1. Clone the repository
```
    git clone git@github.com:IIM-Creative-Technology/headless-strapi-rendu-GrandEmpereur.git
```

### 2. Install Docker (if not already installed)

Follow the instructions on the official [Docker](https://www.docker.com/) website to install Docker on your system.

Make sure Docker app is running on your system before proceeding to the next step.

### 3. Start the Strapi server

Run the following command to start the Strapi server using Docker:

```bash
    docker-compose up
```

### 4. Set up the front-end (React)
Navigate to the `front-end` directory and install the required dependencies:

```bash
    cd front-end
```

```bash
    npm install
    or 
    yarn
```

Start the React development server:

```bash
    npm run dev 
    or 
    yarn dev
```

### 5. Configure environment variables

#### Back-end
For the back-end, copy the `.env.example` file in the root directory and set the required variables for the database:

```bash
    cp .env.example .env
```

#### Front-end
For the front-end, copy the front-end/.env.example file and set the required variables, including the bearer token for the Strapi API:

```bash
    cd front-end
```
```bash
    cp .env.example .env
```
Don't forget to add the bearer token in the .env file for Strapi admin access.

## 📚 Documentation
For more information on how to use Strapi, please refer to the [official documentation](https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html). <br>
Form more information on how to use React, please refer to the [official documentation](https://reactjs.org/docs/getting-started.html).

## 📦 Project Structure

This project consists of two main folders:

- The `front-end` folder contains the React application and its source code.
- The root directory contains the Strapi back-end and its configuration files.

Be sure to navigate to the correct folder before running any commands.

## 📃 License

This project is licensed under the [MIT License](LICENSE).
