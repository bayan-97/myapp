import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './main';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import History from './history';
import Helper from './helper';


const App = (props) => {
  return (
    <>
      <Header />
 
    <main>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/history" component={History} />
        <Route exact path="/help" component={Helper} />



      </Switch>
    </main>
      <Footer />
    </>
  );
};

export default App;
