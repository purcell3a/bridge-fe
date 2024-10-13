import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setError('Form submitted');
    // Perform signup logic here
    // navigate('/dashboard');
    navigate('/chatroom');
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="Signup">
      <img src="bridge.webp" alt="logo" className="logo" />
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label>Password:</label>
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <input type="submit" value="Sign Up" />
      </form>

      {error && <div className="error-message">{error}</div>}
      <Link className="form-link" to="/signup">
        Already have an account? Sign In
      </Link>
    </div>
  );
};

export default SignUp;
