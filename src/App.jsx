import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/style.scss";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";

export const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
