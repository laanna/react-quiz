import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import * as firebase from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyDm5qieuP7TVa12Uk7KTYaafkp-sx8R1rc",
  authDomain: "react-quiz-new-8b138.firebaseapp.com",
  projectId: "react-quiz-new-8b138",
  storageBucket: "react-quiz-new-8b138.appspot.com",
  messagingSenderId: "1021265217061",
  appId: "1:1021265217061:web:2c425edc6e348d2c81a1cc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)


export const Context = createContext(null)


const app = (
  <Context.Provider value={{
    firebase
  }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
