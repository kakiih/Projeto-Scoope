import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de submissão do formulário
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Email input */}
      <div className="form-outline mb-4">
        <input
          type="email"
          id="form2Example1"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="form-label" htmlFor="form2Example1">Email address</label>
      </div>

      {/* Password input */}
      <div className="form-outline mb-4">
        <input
          type="password"
          id="form2Example2"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label className="form-label" htmlFor="form2Example2">Password</label>
      </div>

      {/* 2 column grid layout for inline styling */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          {/* Checkbox */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="form2Example31"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
          </div>
        </div>

        <div className="col">
          {/* Simple link */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      {/* Submit button */}
      <button type="submit" className="btn btn-primary btn-block mb-4">
        Sign in
      </button>

      {/* Register buttons */}
      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or sign up with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
