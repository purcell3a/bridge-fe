import './Landingpage.css';
import { FaCheckCircle, FaBolt, FaStar, FaLock, FaHeart } from 'react-icons/fa';

function LandingPage() {
  return (
    <div className="Landing-Page">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="bridge.webp" alt="Bridge Logo" className="logo-img" />
          <div>Bridge</div>
        </div>
        <nav className="routes">
          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button  href="/signin"  className="secondary-btn">Sign In</button>
          <button className="primary-btn">Sign Up</button>
        </nav>
      </header>

      {/* Info Section */}
      <section className="info">
        <div className="p1">
          <h1>Your Daily Health Companion</h1>
          <p>Stay connected with your doctor effortlessly. HealthTrackr makes tracking your health and sharing updates simple and convenient.</p>
          <ul className="feature-list">
            <li><FaCheckCircle className="icon" /> Daily Check-ins</li>
            <li><FaCheckCircle className="icon" /> Doctor Summaries</li>
            <li><FaCheckCircle className="icon" /> Tailored Suggestions</li>
          </ul>
          <div className="cta-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">View Demo</button>
          </div>
        </div>
        <div className="p2">
          <img src="bridge.webp" alt="HealthTrackr Visual" className="info-img" />
        </div>
      </section>

      {/* Seamless Communication Section */}
      <section className="seamless-communication">
        <h2>Seamless Communication</h2>
        <div className="cta-buttons">
        </div>
        <div className="benefits">
          <div className="benefit-item">
            <FaBolt className="benefit-icon" />
            <h3>Instant Updates</h3>
            <p>Receive real-time updates on your health status.</p>
          </div>
          <div className="benefit-item">
            <FaStar className="benefit-icon" />
            <h3>Clean Design</h3>
            <p>Share your daily health insights effortlessly.</p>
          </div>
          <div className="benefit-item">
            <FaLock className="benefit-icon" />
            <h3>Personalized Care</h3>
            <p>Get personalized care plans based on your daily check-ins.</p>
          </div>
          <div className="benefit-item">
            <FaHeart className="benefit-icon" />
            <h3>Secure & Private</h3>
            <p>Your data is secure and private for your peace of mind.</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <h3>Empowering Your Health Journey</h3>
        <h1>Revolutionize Your Health</h1>
        <div className="cta-buttons">
          <button className="primary-btn">Get Started </button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
