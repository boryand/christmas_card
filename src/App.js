import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import Inside from "./components/inside_the_house";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Wish from "./components/wish";
import Contacts from "./components/contacts";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/special_wish_to_you">
            <Wish />
          </Route>
          <Route path="/welcome_home">
            <Inside />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
