import React from 'react';
import './StatStyles.css';
const SampleStats = ({ item }) => {
    return (
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
    );
};

export default SampleStats;