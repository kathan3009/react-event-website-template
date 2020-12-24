import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import Navbar from "./components/navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
</Router>
  );
}

export default App;
