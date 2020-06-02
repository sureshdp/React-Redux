import { createStore, applyMiddleware, compose } from "redux";
import courseReducer from "./reducers";
import reduxImmutableStateVariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(intialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // support for Redux Dev tools
  return createStore(
    courseReducer,
    intialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateVariant()))
  );
}
