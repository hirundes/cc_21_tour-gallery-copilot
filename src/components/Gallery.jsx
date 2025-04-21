import React, { useEffect, useState } from 'react';
import TourCard from './TourCard';

const Gallery = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch(
                    'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project'
                );
                const data = await response.json();
                setTours(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching tours:', error);
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="gallery">
            {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
            ))}
        </div>
    );
};

export default Gallery;