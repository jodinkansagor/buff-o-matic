import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import MemeList from './MemeList';
import MemeHome from './MemeHome';
import MemeInputForm from './MemeInputForm';


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={MemeHome} />
        <Route path ='/inputform' component={MemeInputForm} />
        <Route path='/memes' component={MemeList} />
      </Switch>
    </Router>
  );
}
