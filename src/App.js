import Landing from "./Components/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from './Components/Authentication/Login'
import { Register } from './Components/Authentication/Register'

// ADMIN COMPONENTS
import { ManageRecipes } from './Components/Admin/Recipes'

import "./App.css";

const Admin = ({ match }) => (
  <>
    <Route exact path={`${match.path}/recipes`} component={ManageRecipes} />
  </>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
