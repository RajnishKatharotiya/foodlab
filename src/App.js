import Landing from './Components/Landing';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
