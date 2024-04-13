import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
    let navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>Welcome to Our Website</h1>
            <button onClick={() => navigate('/next')}>Enter</button>
        </div>
    );
}

export default WelcomePage;
