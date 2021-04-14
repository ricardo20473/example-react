import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import { watcherSaga } from "./actions";

const sagaMiddleWare = createSagaMiddleware();

// const reduxDevTools =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
//     : null;

const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleWare), composeWithDevTools)
);

sagaMiddleWare.run(watcherSaga);

const ReduxWrap = (props) => {
  return (
    <ReduxProvider store={store}>
      {/* NUESTRA APP */}
      {props.children}
    </ReduxProvider>
  );
};

export default ReduxWrap;
