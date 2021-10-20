import Landing from "./Components/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from './Components/Authentication/Login'
import { Register } from './Components/Authentication/Register'

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
