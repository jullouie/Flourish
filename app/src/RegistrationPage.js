import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function RegistrationPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        // Here, you'd send a POST request to your backend
        console.log('Registering:', username, email, password);
        // Navigate to login or directly login the user
        navigate('/Flourish');
    };

    return (
        <div className="RegistrationPage">
            <header className="RegistrationPage-header">
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Create Account</button>
                </form>
            </header>
        </div>
    );
}

export default RegistrationPage;
