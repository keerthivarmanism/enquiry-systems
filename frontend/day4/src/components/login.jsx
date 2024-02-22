import '../assets/logi.css'; // Make sure your CSS file is correctly imported
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Logging in with:', username, password);
    };

    return (
        <>
            <div className="hero" style={{backgroundImage: 'url("https://saisoftnet.in/img/slider/slide2-3.jpg")'}}>
                <div className="form-box">
                    <h1>Login</h1>
                    <form id="email" className="input-group">
                        <input
                            type="text"
                            className="input-field"
                            id="email"
                            placeholder="Email"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            className="input-field"
                            id="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Link to='/nav'>
                            <button type="button" className="submit-btn" onClick={handleLogin}>Login</button>
                        </Link>
                    </form>
                    <div className="signup">
                        <h2>Don't have an account?</h2> 
                        <Link to="/signup">Signup Here</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
