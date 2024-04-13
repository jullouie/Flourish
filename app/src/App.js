import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import logo from './Flowerish.png';

// WelcomePage component
function WelcomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Flowerish</h1>
        <p>
          Click the button below to go to the next page.
        </p>
        <Link to="/next" className="App-link">Enter</Link>
      </header>
    </div>
  );
}

// NextPage component
function NextPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Next Page</h1>
        <p>
          You are now on the next page of our website!
        </p>
        <Link to="/" className="App-link">Go Back</Link>
      </header>
    </div>
  );
}

// App component with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
