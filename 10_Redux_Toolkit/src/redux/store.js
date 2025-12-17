// Importing configureStore from Redux Toolkit
// This is a helper function that simplifies creating and setting up the Redux store
import { configureStore } from '@reduxjs/toolkit'

// Importing the reducer from the counter slice
// This reducer manages the 'counter' part of the global state
import counterReducer from '../features/counter/counterSlice'

// Creating and exporting the Redux store
// The store holds the entire state tree of the application
export const store = configureStore({
  // The reducer field is an object where you define all your slices (pieces of global state)
  reducer: {
    // 'counter' is the name of the slice in the global state
    // counterReducer is the reducer function imported from counterSlice
    counter: counterReducer,
  },
})

/*
🧠 Summary / Redux Toolkit Setup Steps:

1. Create a slice:
   - Use createSlice() to create actions + reducer together in one file (e.g. counterSlice.js)

2. Register the slice reducer in the store:
   - Import the reducer and include it in the configureStore() call under the reducer object

3. Create the store:
   - Use configureStore() to create a Redux store and register all reducers

4. Provide the store to your React app:
   - Wrap the <App /> component inside <Provider store={store}> in index.js

Now your app can access the Redux state and dispatch actions using useSelector and useDispatch hooks.
*/
