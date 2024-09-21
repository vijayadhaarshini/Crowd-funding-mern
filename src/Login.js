import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check password strength
    if (password.length === 0) {
      setPasswordStrength('');
    } else if (password.length < 8) {
      setPasswordStrength('Weak');
    } else if (password.length < 12) {
      setPasswordStrength('Medium');
    } else {
      setPasswordStrength('Strong');
    }
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (isSignUp) {
        console.log('Sign up submitted:', { name, email, password });
      } else {
        console.log('Login submitted:', { email, password });
      }
      navigate('/Home');
    } catch (err) {
      setError('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setIsLoading(true);
    try {
      // Simulating social login API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log(`Logging in with ${provider}`);
      navigate('/Home');
    } catch (err) {
      setError(`${provider} login failed. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>{isSignUp ? 'Create Account' : 'Welcome Back'}</h1>
        <p>Join our innovative crowdfunding community</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="input-group">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
              />
            </div>
          )}
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="input-group password-input">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="button" onClick={togglePasswordVisibility} className="toggle-password">
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
          {isSignUp && passwordStrength && (
            <div className={`password-strength ${passwordStrength.toLowerCase()}`}>
              Password Strength: {passwordStrength}
            </div>
          )}
          {!isSignUp && (
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
          )}
          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Log In')}
          </button>
        </form>
        <p className="toggle-form">
          {isSignUp ? 'Already have an account?' : 'Need an account?'}
          <span onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? ' Log In' : ' Sign Up'}
          </span>
        </p>
        {!isSignUp && (
          <p className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        )}
        <div className="social-login">
          <p>Or continue with</p>
          <div className="social-icons">
            <button className="social-btn google" onClick={() => handleSocialLogin('Google')} disabled={isLoading}>Google</button>
            <button className="social-btn facebook" onClick={() => handleSocialLogin('Facebook')} disabled={isLoading}>Facebook</button>
            <button className="social-btn twitter" onClick={() => handleSocialLogin('Twitter')} disabled={isLoading}>Twitter</button>
          </div>
        </div>
      </div>
      <div className="login-image" style={{backgroundImage: 'url("/path-to-your-image.jpg")'}}></div>
    </div>
  );
};

export default Login;
