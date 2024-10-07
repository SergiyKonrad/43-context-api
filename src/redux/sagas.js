import { changeUserName, toggleUserName } from './userSlice'
import { all, takeLatest, put, delay } from 'redux-saga/effects'

// Saga to handle async name change
function* changeUserNameAsync(action) {
  try {
    yield delay(1000) // Simulate async API call delay
    yield put(changeUserName(action.payload)) // Dispatch success action
  } catch (error) {
    console.error('Error in changeUserNameAsync Saga:', error)
  }
}

// Saga to handle async toggle between names (Sergiy and Mila)
function* toggleUserNameAsync() {
  try {
    console.log('Saga is running...')
    yield delay(500)
    yield put(toggleUserName()) // Dispatch success action to toggle the name
  } catch (error) {
    console.error('Error in toggleUserNameAsync Saga:', error)
  }
}

// Watcher sagas
function* watchChangeUserName() {
  yield takeLatest('user/changeUserNameAsync', changeUserNameAsync)
}

function* watchToggleUserName() {
  yield takeLatest('user/toggleUserNameAsync', toggleUserNameAsync)
}

// Root Saga: Combines multiple sagas if needed
/* export default function* rootSaga() {
  yield watchChangeUserName()
  yield watchToggleUserName()
} */

export default function* rootSaga() {
  yield all([watchChangeUserName(), watchToggleUserName()]) // Run both watchers in parallel
}
