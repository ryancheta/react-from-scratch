import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";

import insights from "store/state/insights/reducer";

const rootReducer = combineReducers({
  insights,
});

const reduxRouterMiddleware = routerMiddleware(createBrowserHistory());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk, reduxRouterMiddleware))
);

export default store;
