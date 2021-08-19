import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import BackDrop from "./components/BackDrop";
import SideDrawer from "./components/SideDrawer";
import {useState} from "react";

function App() {
  const [sideToggle,setSideToggle] = useState(false);
  return (
      <Router>
    <NavBar show={sideToggle} click={()=>setSideToggle(true)}/>
    <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
    <BackDrop show={sideToggle} click={()=>setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/product/:id" component={ProductPage}/>
          <Route exact path="/cart" component={CartPage}/>
        </Switch>
      </main>
      </Router>  );
}

export default App;
