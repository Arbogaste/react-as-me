import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './views/Home';
import Dev from "./views/Dev";
import Contacts from "./views/Contacts";
import Music from "./views/Music";
import Photography from "./views/Photography";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dev" component={Dev} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/photography" component={Photography} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="*" component={Error} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
