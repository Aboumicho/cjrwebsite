import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import { Route, Link, Switch, BrowserRouter as Router, useParams } from 'react-router-dom'
import Home from './Pages/Home';
import Header from './PageComponents/Header'
import Head from "./PageComponents/Head"
import Footer from "./PageComponents/Footer"
import Login from './Pages/Login'
import CreateAccount from './Pages/CreateAccount';
import Commentaires from './Pages/Commentaires'
const store = createStore(reducers, {}, applyMiddleware(Thunk));



const routing = (
  <Provider store={store}>
    <Router>
      <Head/>
      <Header/>
      <Route exact path="/" component={Home} />
      <Route exact path="/index.html" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/CreateAccount" component={CreateAccount} />
      <Route exact path="/commentaires" component={Commentaires} />
      <Switch>
        <Route path="/commentaires/:page" children={<Child />} />
      </Switch>
    </Router>
  </Provider>
)

function Child(){
  let {page} = useParams()
  return(
    <Commentaires page={page} />
  )
}

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
