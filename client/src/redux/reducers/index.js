import { combineReducers } from 'redux';
import { userReducer } from './user_reducer';
import { authReducer } from './auth_reducer';
import { loadingReducer } from './misc_reducers';
import * as Auth from '../action_types/auth_types';

const appReducer = combineReducers({
   user: userReducer,
   auth: authReducer,
   loading: loadingReducer
});

const rootReducer = (state, action) => {
   if (action.type === Auth.UNAUTHENTICATED) {
      state = undefined;
   }
   return appReducer(state, action);
}

export default rootReducer;