import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
import authReducer from '../reducers'
const rootReducer = combineReducers({
    authReducer: authReducer,
});
const store = createStore(rootReducer, applyMiddleware());

export { store };
