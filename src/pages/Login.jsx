// src/pages/Login.jsx
import { useState } from 'react';
import './Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>{isLogin ? 'Login to your account' : 'Create an account'}</h2>
        
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          
          <button type="submit" className="login-btn">
            {isLogin ? 'Sign In' : 'Register'}
          </button>
        </form>

        <div className="login-toggle">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Create one' : 'Login here'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;