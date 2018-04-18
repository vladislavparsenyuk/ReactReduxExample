import { combineReducers } from 'redux';
import homePage from './home-reducer';
import page1 from './page1-reducer';
import page2 from './page2-reducer';

export default combineReducers({
    homePage,
    page1,
    page2,
});