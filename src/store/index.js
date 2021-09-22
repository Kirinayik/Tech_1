import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const rootReducer = combineReducers({
	images: 'none',
	comments: 'none'
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
