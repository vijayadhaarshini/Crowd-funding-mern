import React, { useState } from 'react';
import './details.css'; 

const Start = () => {
  const [step, setStep] = useState(1);
  const [projectDetails, setProjectDetails] = useState({
    title: '',
    description: '',
    category: '',
    fundingGoal: '',
    duration: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Project details submitted:', projectDetails);
    // Redirect to a success page or show a success message
  };

  return (
    <div className="start-journey-container">
      <h1>Start Your Crowdfunding Journey</h1>
      <div className="progress-bar">
        <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1. Project Basics</div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2. Funding Details</div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>3. Review & Submit</div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="form-step">
            <h2>Project Basics</h2>
            <input
              type="text"
              name="title"
              value={projectDetails.title}
              onChange={handleInputChange}
              placeholder="Project Title"
              required
            />
            <textarea
              name="description"
              value={projectDetails.description}
              onChange={handleInputChange}
              placeholder="Project Description"
              required
            ></textarea>
            <select
              name="category"
              value={projectDetails.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a Category</option>
              <option value="technology">Technology</option>
              <option value="art">Art</option>
              <option value="music">Music</option>
              <option value="film">Film</option>
              <option value="games">Games</option>
            </select>
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>Funding Details</h2>
            <input
              type="number"
              name="fundingGoal"
              value={projectDetails.fundingGoal}
              onChange={handleInputChange}
              placeholder="Funding Goal ($)"
              required
            />
            <input
              type="number"
              name="duration"
              value={projectDetails.duration}
              onChange={handleInputChange}
              placeholder="Campaign Duration (days)"
              required
            />
            <button type="button" onClick={prevStep}>Previous</button>
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>Review Your Project</h2>
            <div className="review-details">
              <p><strong>Title:</strong> {projectDetails.title}</p>
              <p><strong>Description:</strong> {projectDetails.description}</p>
              <p><strong>Category:</strong> {projectDetails.category}</p>
              <p><strong>Funding Goal:</strong> ${projectDetails.fundingGoal}</p>
              <p><strong>Duration:</strong> {projectDetails.duration} days</p>
            </div>
            <button type="button" onClick={prevStep}>Previous</button>
            <button type="submit">Submit Project</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Start;


