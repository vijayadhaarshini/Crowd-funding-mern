import React from 'react';
import './CardStyle.css';

const SampleCard = ({ data }) => {
    return (
        <div className="card-container">
            {data.map((item, index) => (
                <div key={index} className="card">
                    <div className="card-content">
                        <div className="card-stats-horizontal">
                            <img src={item.profile_image} alt={item.profile_name} className="card-image" />
                            <div className="card-stat">
                                <span>Posts</span> <strong>{item.posts}</strong>
                            </div>
                            <div className="card-stat">
                                <span>Followers</span> <strong>{item.followers}</strong>
                            </div>
                            <div className="card-stat">
                                <span>Following</span> <strong>{item.following}</strong>
                            </div>
                        </div>
                        <h2 className="card-title">{item.profile_name}</h2>
                        <p className="card-headline">{item.headline}</p>
                        <h3 style={{ fontWeight: 'bold', color: 'black' }}>About</h3>
                        <p className="card-description">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SampleCard;