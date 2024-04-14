import React, { useState } from 'react'; // Import useState here
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Link here
import './App.css';
import logo from "./Flowerish.png";
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import './Button.css';

// WelcomePage component
function WelcomePage() {
  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Flowerish</h1>
              <p>
                  Go to the next page or access your account.
              </p>
              <div>
                  <Link to="/next" className="App-link">Enter</Link>
                  <button style={{ top: '20%', left: '90%' }} className="account-info">Account</button>
              </div>
          </header>
      </div>
  );
}



// NextPage component
function NextPage({increasePoints, points}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Here are your tasks for the day: </h1>
        <p></p>
        <div className="container">
          <button onClick={() => increasePoints(5)} className="button">Drink 8 oz of water</button>
          <button onClick={() => increasePoints(10)} className="button">Check in on your friends. How much have they drank?</button>
          <button onClick={() => increasePoints(15)} className="button">Have a snack!</button>
        </div>
        <div className="points">Points: {points}</div>
        <div className="container">
          <Link to="/garden" className="App-link">
            Go To Your Garden
          </Link>
        </div>
      </header>
    </div>
  );

}

// GardenPage component
function GardenPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Garden Page</h1>
        <p>You are now on the Garden page of our website!</p>
        <Link to="/" className="App-link">
          Go Back Home
        </Link>
      </header>
    </div>
  );
}

// App component with routing
function App() {
  const [points, setPoints] = useState(0);

  const increasePoints = (amount) => {
    setPoints(points + amount);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/next" element={<NextPage increasePoints={increasePoints} points={points} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/next" element={<NextPage />} />
        <Route path="/garden" element={<GardenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
