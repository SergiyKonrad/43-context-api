# React Redux User Management Project with Redux Toolkit

This project demonstrates how to manage user state using **Redux Toolkit** in a React app. The user can toggle between different names (Sergiy and Mila) using a button, with the state being managed centrally through Redux.

## Refactoring with Redux Toolkit

The application has been refactored to use Redux Toolkit for better maintainability and simplicity. We use `createSlice` for creating reducers and actions, and `configureStore` for setting up the store.

## Deployed Version

Check out the deployed version here: [simple-react-redux-project on Vercel](https://simple-react-redux-project.vercel.app/)

## Instructions for Running Locally

### 1. Clone the repository:

```
git clone https://github.com/SergiyKonrad/simple-react-redux-project.git
```

### 2. Navigate to the project directory:

```
cd simple-react-redux-project
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

- The app uses Redux to manage the userName state.

- A button allows the user to toggle between different user names (Sergiy and Mila).

- The input field allows the user to enter a custom name, and the "Clear" button resets the input field and clears the name.

- The `useSelector` hook is used to access the current user name from the Redux store.
- The `useDispatch` hook allows dispatching actions to update the user name or toggle between names.

- This demonstrates the use of Redux for centralized state management and avoiding prop drilling.

## Contributions

Feel free to open an issue or submit a pull request if you'd like to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENCE) file for details.
