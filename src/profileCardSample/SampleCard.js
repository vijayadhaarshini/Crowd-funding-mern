import React from 'react';
import './CardStyle.css';
import SampleStats from './SampleStats';

const SampleCard = ({ item}) => {
    return (
        <div className="card-container">
                <div className="card">
                    <div className="card-content">
                        <SampleStats item={item} />
                        <h2 className="card-title">{item.profile_name}</h2>
                        <p className="card-headline">{item.headline}</p>
                        <h3 style={{ fontWeight: 'bold', color: 'black' }}>About</h3>
                        <p className="card-description">{item.description}</p>
                    </div>
                </div>
        </div>
    );
};

export default SampleCard;