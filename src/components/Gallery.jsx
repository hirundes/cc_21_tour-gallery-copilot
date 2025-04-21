import React, { useEffect, useState } from 'react'; // Import React and hooks
import TourCard from './TourCard'; // Import the TourCard component

const Gallery = () => {
    const [tours, setTours] = useState([]); // State to store the list of tours
    const [loading, setLoading] = useState(true); // State to track loading status

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch(
                    'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project' // API URL
                );
                const data = await response.json(); // Parse the JSON response
                setTours(data); // Update the tours state with the fetched data
                setLoading(false); // Set loading to false after fetching
            } catch (error) {
                console.error('Error fetching tours:', error); // Log any errors
                setLoading(false); // Set loading to false if an error occurs
            }
        };

        fetchTours(); // Call the fetchTours function
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    if (loading) {
        return <p>Loading...</p>; // Display a loading message while data is being fetched
    }

    return (
        <div className="gallery"> {/* Gallery container */}
            {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} /> // Render a TourCard for each tour
            ))}
        </div>
    );
};

export default Gallery; // Export the Gallery component