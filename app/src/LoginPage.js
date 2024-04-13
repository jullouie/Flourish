import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        // Here, you'd normally handle authentication with a backend service
        console.log('Logging in with:', username, password);
        // If login is successful, you might navigate them to a dashboard or home page
        navigate('/next');
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
                <Link to="/register" className="App-link">Create Account</Link>
            </header>
        </div>
    );
}

export default LoginPage;
