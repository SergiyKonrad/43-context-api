# React Redux User Management Project with Redux Saga

The application has been refactored to use **Redux Saga** for handling asynchronous logic and managing side effects in the app. We use `createSlice` for creating reducers and synchronous actions, and **Redux Saga** to manage asynchronous actions like `changeUserNameAsync`.

This project demonstrates how to manage user state using Redux Saga in a React app.

## Migrated Redux Toolkit async logic to Redux Saga

- Replaced Redux Toolkit's async handling with Redux Saga for better control over side effects.
- Added sagas for handling asynchronous actions (changeUserNameAsync, toggleUserNameAsync).
- Updated store configuration to integrate saga middleware and root saga.
- Refactored components to dispatch saga-based actions instead of Redux Toolkit actions.
- Removed thunk and other toolkit async configurations in favor of saga-based async logic.

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

- The app uses Redux Saga for managing asynchronous logic and Redux for managing the userName state.

- A button allows the user to toggle between different user names (Sergiy and Mila).

- The input field allows the user to enter a custom name, and the "Clear" button resets the input field and clears the name.

- The `useSelector` hook is used to access the current user name from the Redux store.
- The `useDispatch` hook allows dispatching actions to update the user name or toggle between names.

- Redux Saga is used to handle asynchronous updates to the user name, simulating delays and processing with changeUserNameAsync and toggleUserNameAsync.

## Contributions

Feel free to open an issue or submit a pull request if you'd like to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENCE) file for details.
