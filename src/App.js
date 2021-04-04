import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //  WILL ONLY RUN OCE THE COMPONENT LOADS
    auth.onAuthStateChanged(authUser => {
      console.log('USER IS >>> ' , authUser);

      if(authUser){
        // the user just logged in/ the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          Uuser: null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
         <Route path='/login'>
            <Login />
         </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
