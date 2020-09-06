import React from 'react';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RouteNotMatch from './Components/RouteNotMatch/RouteNotMatch';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    <>

      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/post/:id">
            <PostDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <RouteNotMatch />
          </Route>
        </Switch>
      </Router>



    </>
  );
}

export default App;
