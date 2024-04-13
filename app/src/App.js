import React, { useState } from 'react';
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
          Go to the next page.
        </p>
        <Link to="/next" className="App-link">Enter</Link>
      </header>
    </div>
  );
}

// NextPage component
function NextPage() {
  const [points, setPoints] = useState(0);

  const increasePoints = (amount) => {
    setPoints(points + amount);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Here are your tasks for the day: </h1>
        <p></p>
        <div>
          <button onClick={() => increasePoints(5)}>Drink 8 oz of water</button>
          <button onClick={() => increasePoints(10)}>Check in on your friends. How much have they drank?</button>
          <button onClick={() => increasePoints(15)}>Have a snack!</button>
        </div>
        <div>Points: {points}</div>
        <Link to="/garden" className="App-link">
          Go To Your Garden
        </Link>
      </header>
    </div>
  );

}

// GardenPage component
function GardenPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Next Page</h1>
        <p>You are now on the next page of our website!</p>
        <Link to="/garden" className="App-link">
          Go To Your Garden
        </Link>
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
        <Route path="/garden" element={<GardenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
