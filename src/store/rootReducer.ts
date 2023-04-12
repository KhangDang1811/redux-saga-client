import { combineReducers } from 'redux';
import createPostReducer from './todo/reducer';

const rootReducer = combineReducers({
  createPost: createPostReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
