import { createStore, applyMiddleware, compose } from "redux";
import {
  // ConnectedRouter,
  // routerReducer,
  routerMiddleware,
  // push
} from "react-router-redux";
import createHistory from "history/createBrowserHistory";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import rootReducer from "./reducer/reducer";
import rootSaga from "./saga/saga";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const reactRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middleware = [reactRouterMiddleware, sagaMiddleware];

export default function storeConfig(initialState: any) {
  if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
  }
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
