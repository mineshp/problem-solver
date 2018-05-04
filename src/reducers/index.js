/* istanbul ignore next not testing file */
import { combineReducers } from 'redux';
import notification from './notification';
import authentication from './authentication';

/* istanbul ignore next: not testing combineReducers */
const problemSolverApp = combineReducers({
    notification, authentication
});

/* istanbul ignore next: not testing export */
export default problemSolverApp;
