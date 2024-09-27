# Context API Project

This project demonstrates how to use React Context to manage user state in a simple app. It allows users to switch between different names using a button, with the name being managed through React Context.

## Deployed Version

Check out the deployed version here: [https://43-context-api.vercel.app/](https://43-context-api.vercel.app/)

## Instructions for Running Locally

### 1. Clone the repository:

```
git clone https://github.com/SergiyKonrad/43-context-api.git

```

### 2. Navigate to the project directory:

```
cd 43-context-api

```

### 3. Install dependencies:

```
npm install

```

### 4. Start the development server:

```
npm start

```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Functionality Description

- The app uses React Context to manage the `userName` state.
- A button allows the user to toggle between different user names (`Bogdan` and `Alice`).
- This demonstrates the use of Context API to avoid prop drilling by managing state globally.
