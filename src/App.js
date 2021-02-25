import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SearchPage from './SearchPage';

function App() {

  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
      {/* Header */}

      {/* HOME */}
      {/* Banner */}
      {/* Banner-search */}

      {/* Cards */}

      {/* Footer */}

      {/* SEARCHPAGE */}
      {/* ... */}
    </div>

  );
}

export default App
