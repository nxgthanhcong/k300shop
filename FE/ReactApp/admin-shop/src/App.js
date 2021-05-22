import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Common/Footer';
import Navbar from './components/Common/Navbar';
import Sidebar from './components/Common/Sidebar';
import HomePage from './components/PageContents/HomePage';

const App = function (props) {
  return (
    <> 
      <Navbar />
      <Sidebar />
      <Switch>
          <Route path="/" exact component={HomePage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
