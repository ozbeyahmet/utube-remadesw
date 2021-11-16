import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Screen from "./Screen.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import {firebase} from './firebase'
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login(
            {
              email: userAuth.email,
              uid: userAuth.uid,
              
            }
          )
        );
      }
      else {
        dispatch(logout())
      }
    });
  }, [dispatch])
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <Switch>
          <Route exact path="/">
            <div className="App">
              <Screen />
            </div>
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
