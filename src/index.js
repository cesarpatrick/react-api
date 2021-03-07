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
import Team from "./components/Soccer/Team/Team";
import MotorSports from "./components/MotorSports";
import Fighting from "./components/Fighting";
import AmericanFootball from "./components/AmericanFootball";
import Baseball from "./components/Baseball";
import IceHockey from "./components/IceHockey";
import Golf from "./components/Golf";
import Basketball from "./components/Basketball";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={App} />
              <Route path="/home" exact component={App} />
              <Route path="/Soccer" component={Soccer} />
              <Route path="/soccerTeam" component={SoccerTeam} />
              <Route path="/league" component={League} />
              <Route path="/team" component={Team} />
              <Route path="/Motorsport" component={MotorSports} />
              <Route path="/Fighting" component={Fighting} />
              <Route path="/American Football" component={AmericanFootball} />
              <Route path="/Baseball" component={Baseball} />
              <Route path="/Ice Hockey" component={IceHockey} />
              <Route path="/Golf" component={Golf} />
              <Route path="/Basketball" component={Basketball} />
          </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
