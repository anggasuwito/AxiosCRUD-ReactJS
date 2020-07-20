import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/MainHeader'
import LoginForm from './pages/login/LoginForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <LoginForm/>
        </div>
      </div>
    );
  }
}

export default App;
