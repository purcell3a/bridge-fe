import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';  // Reuse the Signup CSS or create a separate one for SignIn

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setError('Sign In submitted');
    // Perform sign-in logic here
    // navigate('/dashboard');
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="SignIn">
      <img src="bridge.webp" alt="logo" className="logo" />
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input placeholder="Email" type="email" name="email" value={form.email} onChange={handleChange} />

        <label>Password: </label>
        <input placeholder="Password" type="password" name="password" value={form.password} onChange={handleChange} />

        <input type="submit" value="Sign In" />
      </form>
      {error && <div className="error-message">{error}</div>}
      <Link className="form-link" to="/signup">Don't have an account? Sign Up</Link>
    </div>
  );
};

export default SignIn;
