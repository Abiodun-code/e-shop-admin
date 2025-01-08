import { configureStore } from '@reduxjs/toolkit'
import { signUpReducer } from './not-authenticated/sign-up/SignUpSlice'
import { signInReducer } from './not-authenticated/sign-in/signInSlice'
import { updateUserReducer } from './authenticated/update-user/updateSlice'

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    signIn: signInReducer,
    updateUser: updateUserReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch