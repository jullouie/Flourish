// ShopPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function ShopPage({ points, spendPoints }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shop</h1>
        <p>You have {points} points to spend.</p>
        <button onClick={() => spendPoints(50)} disabled={points < 50}>
          Redeem 50 Points for a Plant
        </button>
        <Link to="/" className="App-link">Go Back Home</Link>
      </header>
    </div>
  );
}

export default ShopPage;
