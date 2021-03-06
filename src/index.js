import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/bootstrap.min.css';
import './css/paper-kit.css';
import  './css/paper-kit.css';
import  './css/footer.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Soccer from "./components/Soccer/Soccer";
import SoccerTeam from "./components/Soccer/SoccerTeam";
import League from "./components/Soccer/League/League";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={App} />
              <Route path="/home" exact component={App} />
              <Route path="/Soccer" component={Soccer} />
              <Route path="/soccerTeam" component={SoccerTeam} />
              <Route path="/league" component={League} />
          </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
