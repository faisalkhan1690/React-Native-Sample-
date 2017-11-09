import { combineReducers } from 'redux';
import homeReducer from './redux/reducer';

export default combineReducers({
    home: homeReducer,
});

