import React, { useState } from 'react';
import './listing.css';

function Listing() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Artistic Impressions',
      description: 'A project for unique art pieces.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'John Doe', username: 'johndoe' },
      fundingGoal: 10000,
      backers: 10,
      daysRemaining: 30,
      category: 'art',
      fundingProgress: 5000,
    },
    {
      id: 2,
      title: 'Innovative Design Concepts',
      description: 'Modern design solutions.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'Jane Doe', username: 'janedoe' },
      fundingGoal: 5000,
      backers: 5,
      daysRemaining: 20,
      category: 'design',
      fundingProgress: 2000,
    },{
      id: 3,
      title: 'Tech Revolution',
      description: 'Latest in tech innovations.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'Sam Wilson', username: 'samwilson' },
      fundingGoal: 20000,
      backers: 18,
      daysRemaining: 15,
      category: 'technology',
      fundingProgress: 12000,
    },
    {
      id: 4,
      title: 'Digital Art Extravaganza',
      description: 'A collection of digital masterpieces.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'Olivia Chen', username: 'oliviachen' },
      fundingGoal: 8000,
      backers: 12,
      daysRemaining: 22,
      category: 'art',
      fundingProgress: 4000,
    },
    {
      id: 5,
      title: 'Musical Memories',
      description: 'A music album that resonates.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'Liam O\'Connor', username: 'liamoconnor' },
      fundingGoal: 15000,
      backers: 25,
      daysRemaining: 10,
      category: 'music',
      fundingProgress: 9500,
    },
    {
      id: 6,
      title: 'Eco-Friendly Designs',
      description: 'Sustainable design solutions.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'Mia Patel', username: 'miapatel' },
      fundingGoal: 10000,
      backers: 8,
      daysRemaining: 28,
      category: 'design',
      fundingProgress: 3000,
    },
    {
      id: 7,
      title: 'Filmmaker\'s Dream',
      description: 'A documentary series on unique stories.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'Noah King', username: 'noahking' },
      fundingGoal: 20000,
      backers: 30,
      daysRemaining: 35,
      category: 'film',
      fundingProgress: 15000,
    },
    {
      id: 8,
      title: 'AI in Healthcare',
      description: 'Exploring AI to improve healthcare solutions.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'Sophia Reed', username: 'sophiareed' },
      fundingGoal: 25000,
      backers: 22,
      daysRemaining: 40,
      category: 'technology',
      fundingProgress: 13000,
    },
    {
      id: 9,
      title: 'Portrait of an Artist',
      description: 'A series of unique portraits.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'Lucas Moore', username: 'lucasmoore' },
      fundingGoal: 7000,
      backers: 15,
      daysRemaining: 18,
      category: 'art',
      fundingProgress: 3500,
    },
    {
      id: 10,
      title: 'Sustainable Music',
      description: 'An album inspired by nature.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'Emma Green', username: 'emmagreen' },
      fundingGoal: 16000,
      backers: 20,
      daysRemaining: 25,
      category: 'music',
      fundingProgress: 6000,
    },
    {
      id: 11,
      title: 'Design for All',
      description: 'Accessible design solutions.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'Ethan White', username: 'ethanwhite' },
      fundingGoal: 12000,
      backers: 15,
      daysRemaining: 12,
      category: 'design',
      fundingProgress: 8000,
    },
    {
      id: 12,
      title: 'Documenting the Unknown',
      description: 'A film exploring hidden stories.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'Amelia Adams', username: 'ameliaadams' },
      fundingGoal: 18000,
      backers: 20,
      daysRemaining: 27,
      category: 'film',
      fundingProgress: 9000,
    },
    {
      id: 13,
      title: 'Next Gen Tech',
      description: 'A revolutionary tech project.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'James Nguyen', username: 'jamesnguyen' },
      fundingGoal: 30000,
      backers: 50,
      daysRemaining: 20,
      category: 'technology',
      fundingProgress: 20000,
    },
    {
      id: 14,
      title: 'Art of the Future',
      description: 'Modern art pieces redefined.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'Ella Baker', username: 'ellabaker' },
      fundingGoal: 9000,
      backers: 18,
      daysRemaining: 14,
      category: 'art',
      fundingProgress: 4500,
    },
    {
      id: 15,
      title: 'Global Beats',
      description: 'An album inspired by world music.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'Aiden Parker', username: 'aidenparker' },
      fundingGoal: 14000,
      backers: 12,
      daysRemaining: 15,
      category: 'music',
      fundingProgress: 5000,
    },
    {
      id: 16,
      title: 'Creative Designs',
      description: 'Unique and functional designs.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'Grace Kim', username: 'gracekim' },
      fundingGoal: 10000,
      backers: 14,
      daysRemaining: 22,
      category: 'design',
      fundingProgress: 4000,
    },
    {
      id: 17,
      title: 'Cinema Chronicles',
      description: 'A film series on historical events.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'Benjamin Lee', username: 'benjaminlee' },
      fundingGoal: 15000,
      backers: 35,
      daysRemaining: 30,
      category: 'film',
      fundingProgress: 12000,
    },
    {
      id: 18,
      title: 'Tech for Good',
      description: 'Technology with a social impact.',
      thumbnail: 'https://via.placeholder.com/200x200',
      creator: { name: 'Victoria Zhang', username: 'victoriazhang' },
      fundingGoal: 20000,
      backers: 17,
      daysRemaining: 15,
      category: 'technology',
      fundingProgress: 7000,
    }
    // ... other project data
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleCategoryChange = (event) => {
    // Additional code to handle category filtering (if needed)
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="profile-page">
      <header>
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search projects"
        />
        <select onChange={handleCategoryChange}>
          <option value="">All categories</option>
          <option value="art">Art</option>
          <option value="design">Design</option>
          <option value="film">Film</option>
          <option value="music">Music</option>
          <option value="technology">Technology</option>
        </select>
        <button onClick={() => alert('Create New Project functionality coming soon!')}>Create New Project</button>
      </header>
      <main>
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.thumbnail} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>
              By {project.creator.name} ({project.creator.username})
            </p>
            <progress value={project.fundingProgress} max={project.fundingGoal} />
            <p>
              ${project.fundingProgress.toLocaleString()} of ${project.fundingGoal.toLocaleString()} funded
            </p>
            <p>
              {project.backers} backers • {project.daysRemaining} days remaining
            </p>
            <button onClick={() => alert(Support Project ${project.id})}>Support Project</button>
            <div className="share-icons">
              <button onClick={() => alert(Share Project ${project.id} on Facebook)}>
                <i className="fa fa-facebook" />
              </button>
              <button onClick={() => alert(Share Project ${project.id} on Twitter)}>
                <i className="fa fa-twitter" />
              </button>
              <button onClick={() => alert(Share Project ${project.id} on LinkedIn)}>
                <i className="fa fa-linkedin" />
              </button>
            </div>
          </div>
        ))}
      </main>
      <footer>
        <p>&copy; 2023 Crowdfunding Platform</p>
        <ul>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Listing;
