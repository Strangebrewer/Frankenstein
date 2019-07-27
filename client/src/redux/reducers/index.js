import { combineReducers } from 'redux';
import { authReducer } from './auth_reducer';
import { imageReducer } from './dragon_writer/image_reducer'
import { loadingReducer } from './misc_reducers';
import { projectReducer, currentProjectReducer } from './dragon_writer/project_reducer'
import { subjectReducer } from './dragon_writer/subject_reducer'
import { textReducer } from './dragon_writer/text_reducer'
import { userReducer } from './user_reducer';
import * as Auth from '../action_types/auth_types';

const appReducer = combineReducers({
   auth: authReducer,
   images: imageReducer,
   loading: loadingReducer,
   projects: projectReducer,
   current_project: currentProjectReducer,
   subjects: subjectReducer,
   texts: textReducer,
   user: userReducer,
});

const rootReducer = (state, action) => {
   if (action.type === Auth.UNAUTHENTICATED) {
      state = undefined;
   }
   return appReducer(state, action);
}

export default rootReducer;