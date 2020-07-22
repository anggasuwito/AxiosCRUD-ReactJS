import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/MainHeader'
import Navigation from './pages/Navigation'
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
