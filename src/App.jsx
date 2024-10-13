import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Landingpage';
import SignUp from './afadf.jsx';
import SignIn from './SignIn.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
