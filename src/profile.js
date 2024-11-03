import React, { useState, useEffect } from 'react';
import './profile.css';

function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    username: 'johndoe',
    bio: 'A passionate developer with a love for creating beautiful and functional web applications. Always eager to learn new technologies and improve my skills.',
    contact: 'johndoe@example.com',
    socialMedia: [
      { platform: 'Twitter', link: 'https://twitter.com/johndoe' },
      { platform: 'Facebook', link: 'https://facebook.com/johndoe' },
      { platform: 'Instagram', link: 'https://instagram.com/johndoe' },
      { platform: 'LinkedIn', link: 'https://linkedin.com/in/johndoe' },
    ],
  });

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Eco-Friendly App',
      description: 'An app that helps users track their carbon footprint.',
      fundingGoal: 2500,
      currentFunding: 1200,
      backers: 15,
      thumbnail: 'Zeroplastickit3.jpg',
    },
    {
      id: 2,
      title: 'Smart Gardening Kit',
      description: 'A kit designed for urban gardening enthusiasts.',
      fundingGoal: 5000,
      currentFunding: 3000,
      backers: 25,
      thumbnail: 'Zeroplastickit3.jpg',
    },
    {
      id: 3,
      title: 'Virtual Reality Learning Platform',
      description: 'An immersive platform for educational content.',
      fundingGoal: 8000,
      currentFunding: 4500,
      backers: 40,
      thumbnail: 'The-10-Biggest-AR-VR-And-Immersive-Internet-Trends-In-2024.webp',
    },
  ]);

  useEffect(() => {
    // Update funding progress and number of backers in real-time
    const intervalId = setInterval(() => {
      setProjects((prevProjects) =>
        prevProjects.map((project) => ({
          ...project,
          currentFunding: project.currentFunding + 10,
          backers: project.backers + 1,
        }))
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="profile-page" style={{ overflowY: 'auto', height: '100vh' }}>
      <div className="profile-section">
        <img
          src={require('./image-asset.jpeg')}
          alt="Profile Picture"
          className="profile-picture"
        />
        <h1 className="profile-name">{user.name}</h1>
        <h2 className="profile-username">@{user.username}</h2>
        <p className="profile-bio">{user.bio}</p>
        <p className="profile-contact">{user.contact}</p>
        <ul className="profile-social-media">
          {user.socialMedia.map((socialMedia, index) => (
            <li key={index}>
              <a href={socialMedia.link} target="_blank" rel="noopener noreferrer">
                {socialMedia.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="project-showcase">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={require(./${project.thumbnail})} alt="Project Thumbnail" className="project-thumbnail" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-funding">
              <p>
                Funding Goal: ${project.fundingGoal}
              </p>
              <p>
                Current Funding: ${project.currentFunding}
              </p>
              <p>
                Backers: {project.backers}
              </p>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: ${(project.currentFunding / project.fundingGoal) * 100}% }}
                />
              </div>
            </div>
            <button className="share-button">Share on Social Media</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
