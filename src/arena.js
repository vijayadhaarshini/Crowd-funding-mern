import React from 'react';
import './Arena.css'; 

const Arena = () => {
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <a href="/" className="logo">Arena</a>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Revolutionize Your Ideas with Arena</h1>
            <p>The next-gen crowdfunding platform for visionaries and innovators</p>
            <a href="/details" className="cta-button">Start Your Project</a>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <h2>Why Choose Arena?</h2>
            <div className="feature-grid">
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3>Launch Faster</h3>
                <p>Get your project off the ground in record time with our streamlined process.</p>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h3>Global Reach</h3>
                <p>Connect with backers and supporters from around the world.</p>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Secure & Transparent</h3>
                <p>Our blockchain-based platform ensures the highest level of security and transparency.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="how-it-works">
          <div className="container">
            <h2>How It Works</h2>
            <div className="how-it-works-container">
              <div className="how-it-works-timeline"></div>
              <div className="how-it-works-item">
                <div className="how-it-works-content">
                  <h3>Create Your Project</h3>
                  <p>Define your vision, set your funding goal, and craft your pitch. Our intuitive platform guides you through every step of the process.</p>
                </div>
                <div className="how-it-works-icon">1</div>
              </div>
              <div className="how-it-works-item">
                <div className="how-it-works-content">
                  <h3>Share & Promote</h3>
                  <p>Leverage our advanced tools and your network to spread the word about your project. Engage with potential backers and build momentum.</p>
                </div>
                <div className="how-it-works-icon">2</div>
              </div>
              <div className="how-it-works-item">
                <div className="how-it-works-content">
                  <h3>Get Funded</h3>
                  <p>Watch as backers support your project and help bring your idea to life. Our transparent system ensures smooth transactions and updates.</p>
                </div>
                <div className="how-it-works-icon">3</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="container">
          <p>&copy; 2023 Arena Crowdfunding Platform. All rights reserved.</p>
          <p>Contact us: info@arenacrowdfunding.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Arena;