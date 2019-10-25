import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';

export default function Router() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Projects} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
