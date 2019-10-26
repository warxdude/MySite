import React from 'react';
import './App.css';
import MyNavBar from './components/MyNavBar';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <MyNavBar/>
            <div>
              <Route exact path="/" component={Portfolio} />
            </div>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
