import Landing from "./Components/Landing";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Components
import { Login } from "./Components/Authentication/Login";
import { Register } from "./Components/Authentication/Register";
import Recipes from './Components/Recipes';

// ADMIN COMPONENTS
import { ManageRecipes } from "./Components/Admin/Recipes";

import "./App.css";
import { isAdmin } from "./Components/shared/utils";

const Admin = ({ match }) => {
  if (!isAdmin()) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Route exact path={`${match.path}/recipes`} component={ManageRecipes} />
    </>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/recipes" component={Recipes} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
