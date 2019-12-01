import { combineReducers } from 'redux';
import { HomeReducer, RegisterReducer, PickerReducer } from '../Screens'

const rootReducer = combineReducers({
  blank: (state = null) => state,
  home: HomeReducer,
  register:RegisterReducer,
  picker: PickerReducer
});

export default (rootReducer);
