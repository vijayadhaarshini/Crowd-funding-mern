import React, { useEffect, useState } from 'react';
import SampleCard from './SampleCard';
import cardData from './CardData.json';
import './CardStyle.css';

const RenderCards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Simulate fetching data from CardData.json
        setData(cardData);
    }, []);

    return (
        <div>
            <SampleCard data={data} />
        </div>
    );
};

export default RenderCards;