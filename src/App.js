import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import Event from "./components/events";
import Navbar from "./components/navbar";
import Member from "./components/member";
import Faqs from "./components/faqs";
import Contact from "./components/contact";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/events" component={Event}/>
      <Route  path="/member" component={Member}/>
      <Route  path="/contact" component={Contact}/>
      <Route  path="/faqs" component={Faqs}/>
    </Switch>
</Router>
  );
}

export default App;
