import { useState } from 'react';
import {login} from "../utils/login.js";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      await login({ email, password });
      alert('Login successful!');
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const isLoginDisabled = email === '' || password.length < 6 || loading;

  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && (
        <div className="errorMessage">{error}</div>
      )}

      <div className="button">
        <button onClick={handleLogin} disabled={isLoginDisabled}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </div>
  );
}

export default LoginForm