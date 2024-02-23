import React from 'react';
import '../assets/sign.css'; // Import CSS file for styling

function SignUp() {
    return (
        <div className="container">
            <header>
                <h1>Create an Account</h1>
                <p>Please fill in this form to create an account.</p>
            </header>
            <main>
                <form className="signup-form">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input type="password" id="confirm-password" name="confirm-password" />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </main>
        </div>
    );
}

export default SignUp;
