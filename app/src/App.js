import { default as React, useState } from 'react'; // Import useState here
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Link here
import './App.css';
import './Button.css';
import LoginPage from './LoginPage';
import NavBar from './NavBar';
import RegistrationPage from './RegistrationPage';
import logo from "./pics/Flowerish.png";
import plant1 from "./pics/flowers.png";
import './AnimatedButton.css';

// WelcomePage component 1
function WelcomePage() {

  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Flourish</h1>
              <p>
                  What theme are you looking for?
              </p>
              <div>
                {/* Link each button to a different page */}
                <Link to="/tasks" className="button2">Night Out</Link>
                <Link to="/athletics" className="button2">Athletics</Link>
                <Link to="/academics" className="button2">Academics</Link>
              </div>
              {/* <div>
                  <Link to="/tasks" className="App-link">Enter</Link>
              </div> */}
          </header>
      </div>
  );
}



// TasksPage component
function TasksPage({increasePoints, points}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Here are your tasks for your NIGHT OUT: </h1>
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

// TasksPage component
function TasksPageAthletics({increasePoints, points}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Here are your tasks for your NIGHT OUT: </h1>
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

// TasksPage component
function TasksPageAcademics({increasePoints, points}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Here are your tasks for your NIGHT OUT: </h1>
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
      <div><NavBar />  {/* Navbar included here */}</div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/tasks" element={<TasksPage increasePoints={increasePoints} points={points} />} />
        <Route path="/athletics" element={<TasksPageAthletics increasePoints={increasePoints} points={points} />} />
        <Route path="/academics" element={<TasksPageAcademics increasePoints={increasePoints} points={points} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/garden" element={<GardenPage showPlant={showPlant} />} />
      </Routes>
    </Router>
  );
}

export default App;
