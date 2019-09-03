import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducers from "./reducers/index";
// import { getPosts, register, login } from "./actions/userActions"; // TEST CODE THÌ BỎ COMMENT
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/sagas";
import App from "./App";
import { Provider } from "react-redux";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

//-------------------------------------------------------//
//-- SAGA MIDDLEWARE phải được run trước khi dispatch --//
//-----------------------------------------------------//

sagaMiddleware.run(rootSaga);

//--------------------------------------------------------------------------------//
//------------------------------------TEST CODE-----------------------------------//
//--------------------------------------------------------------------------------//

//------------------------------------//
//----------SUCCESS REGISTER---------//
//----------------------------------//

// store.dispatch(
//   register("tongvu.244@gmail.com", "tongphanhoangvu", "tongphanhoangvu")
// );
// store.dispatch(
//   register("ng.thanhkieu_1996@gmail.com", "tongvudeptrai", "tongvudeptrai")
// );
// store.dispatch(
//   register("ho_huuphuoc@gmail.com", "phuocbethuong", "phuocbethuong")
// );

//-----------------------------------//
//----------FAILED REGISTER---------//
//---------------------------------//

// store.dispatch(register("qohyvo@gmail.com", "voquohy", "quohyvo"));

//------------------------------------------//
//--------------LOGIN SUCCESS--------------//
//----------------------------------------//

// store.dispatch(login("tongvu.244@gmail.com", "tongphanhoangvu"));

//-------------------------------------------//
//--------------LOGIN FAILED----------------//
//-----------------------------------------//

// store.dispatch(login("ho_huuphuoc@gmail.com", "phuocngao"));

//-------------------------------------------------//
//-----------CREATE USER NAME ALREADY ------------//
//-----------------------------------------------//

// store.dispatch(
//   register("ng.thanhkieu_1996@gmail.com", "tongvutongvu", "tongvutongvu")
// );

//------------------------------------//
//----------SUCCESS REGISTER---------//
//----------------------------------//

// store.dispatch(register("quohyvo@gmail.com", "voquohy", "voquohy"));

//-------------------------------------------//
//---------------FETCH POSTS----------------//
//-----------------------------------------//

// store.dispatch(getPosts());

//--------------------------------------------------------------------------------//
//----------------------------------END TEST CODE---------------------------------//
//--------------------------------------------------------------------------------//

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
