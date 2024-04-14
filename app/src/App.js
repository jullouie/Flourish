import { default as React, useState } from 'react'; // Import useState here
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Link here
import './App.css';
import logo from "./Flowerish.png";
import plant1 from "./flowers.png";
import LoginPage from './LoginPage';
import Navbar from './Navbar';
import RegistrationPage from './RegistrationPage';

// WelcomePage component
function WelcomePage() {
  const [showAccountOptions, setShowAccountOptions] = useState(false);

  const toggleAccountOptions = () => {
      setShowAccountOptions(!showAccountOptions);
  };

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
                  <button onClick={toggleAccountOptions} style={{ top: '20%', left: '90%' }} className="account-info">Account</button>
                  {showAccountOptions && (
                      <div className="account-options" style={{ top: '30%', left: '90%' }}>
                          <Link to="/login" className="App-link">Login</Link>
                          <Link to="/register" className="App-link">Register</Link>
                      </div>
                  )}
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
          <button onClick={() => increasePoints(5)} className="task-buttons">Drink 8 oz of water</button>
          <button onClick={() => increasePoints(10)} className="task-buttons">Check in on your friends. How much have they drank?</button>
          <button onClick={() => increasePoints(15)} className="task-buttons">Have a snack!</button>
        </div>
        <div className="points">Points: {points}</div>
        <Link to="/garden" className="App-link">
          Go To Your Garden
        </Link>
      </header>
    </div>
  );

}

// GardenPage component
function GardenPage({ showPlant }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Garden Page</h1>
        {showPlant && <img src={plant1} alt="Plant" />}

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
  const [showPlant, setShowPlant] = useState(false);

  const increasePoints = (amount) => {
    const newPoints = points + amount;
    setPoints(newPoints);

    if (newPoints >= 50) {
      setShowPlant(true);
      setPoints(newPoints - 50); // subtract 50 points
    }
  }

  return (
    <Router>
      <div><Navbar />  {/* Navbar included here */}</div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/next" element={<NextPage increasePoints={increasePoints} points={points} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/next" element={<NextPage />} />
        <Route path="/garden" element={<GardenPage showPlant={showPlant} />} />
      </Routes>
    </Router>
  );
}

export default App;
