import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./Detail";
import List from "./List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="mainContainer">
        <Router>
          <Switch>
            <Route exact path="/">
              <List />
            </Route>
            <Route path="/:characterId">
              <Detail />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
