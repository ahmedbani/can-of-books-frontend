import React from "react";
import Header from "./Header";
import { withAuth0 } from "@auth0/auth0-react";
import IsLoadingAndError from "./IsLoadingAndError";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import BestBooks from './BestBooks';
import Profile from "./components/profile";

class App extends React.Component {
  render() {
    console.log("app", this.props);
    let authenticated = this.props.auth0.isAuthenticated;
    console.log(authenticated);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {
                  /* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */
                  authenticated ? <BestBooks/> : <Login /> 
                }
              </Route>
              <Route exact path="/profile">
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */
                
                authenticated ? <Profile /> : <Login /> 
              }
                
              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0 (App);
