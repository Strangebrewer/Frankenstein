import { combineReducers } from 'redux';
import { authReducer, userReducer } from './auth_reducer';
import { imageReducer } from './dragon_writer/image_reducer'
import { loadingReducer } from './misc_reducers';
import { projectReducer } from './dragon_writer/project_reducer'
import { subjectReducer } from './dragon_writer/subject_reducer'
import { textReducer } from './dragon_writer/text_reducer'
import * as Auth from '../action_types/auth_types';


import { calcDisplayReducer } from './misc_reducers';

const appReducer = combineReducers({
   auth: authReducer,
   images: imageReducer,
   loading: loadingReducer,
   projects: projectReducer,
   subjects: subjectReducer,
   texts: textReducer,
   user: userReducer,
   calcDisplay: calcDisplayReducer
});

const rootReducer = (state, action) => {
   if (action.type === Auth.UNAUTHENTICATED) {
      state = undefined;
   }
   return appReducer(state, action);
}

export default rootReducer;