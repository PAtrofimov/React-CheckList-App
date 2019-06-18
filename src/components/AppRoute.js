import React from "react";
import { Switch, Route, Link } from "react-router-dom";
//import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

const Settings = () => <p>Settings</p>;
const Checks = () => <p>Checks</p>;
const ChecksTemplates = () => <p>Checks-templates</p>;
const Analytics = () => <p>Analytics</p>;

const Tasks = () => <p>Tasks</p>;
const Calendar = () => <p>Calendar</p>;

const App = () => (
  <Router>
    <div>
      <header className="header">
        <div className="top-menu">
          <ul>
            <li>
              <Link to="/">Задачи</Link>
            </li>
            <li>
              <Link to="/calendar">Календарь</Link>
            </li>
            <li>
              <Link to="/checks">Чек-листы</Link>
            </li>
            <li>
              <Link to="/checktemplates">Шаблоны чек-листов</Link>
            </li>
            <li>
              <Link to="/analytics">Аналитика</Link>
            </li>
            <li>
              <Link to="/settings">Настройки</Link>
            </li>
          </ul>
        </div>
      </header>

      <hr />
      <div className="content">
        <Route exact path="/" component={Tasks} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/checks" component={Checks} />
        <Route path="/checktemplates" component={ChecksTemplates} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/settings" render={() => Settings()} />
      </div>
    </div>
  </Router>
);

export default App;
