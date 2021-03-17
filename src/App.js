import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import i18n from './component/i18n';
import Home from './pages/home';
import Products from './pages/products';
import About from './pages/about';
import Contact from './pages/contact';
import Header from './component/header';
import Footer from './component/footer';
import Nav from './component/nav';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <div>
              <Header />
              <Nav />
              <Switch>
                <Route
                  path="/"
                  exact
                  component={Home}
                />
                <Route
                  path="/home"
                  exact
                  component={Home}
                />
                <Route
                  path="/products"
                  exact
                  component={Products}
                />  
                <Route
                  path="/about"
                  exact
                  component={About}
                />      
                <Route
                  path="/contact"
                  exact
                  component={Contact}
                /> 
                                                         
                <Route component={Home} />                                    

              </Switch>
            </div>
          </BrowserRouter>
          <Footer />
        </I18nextProvider>
      </div>
    );
  }
}
export default App; 