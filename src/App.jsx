import React, { useState, useEffect } from 'react';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Tours</h1>
      <Gallery tours={tours} />
    </div>
  );
};

const Gallery = ({ tours }) => {
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <div key={tour.id} className="gallery-item">
          <img src={tour.image} alt={tour.name} />
          <h3>{tour.name}</h3>
          <p>{tour.info}</p>
          <p>Price: ${tour.price}</p>
        </div>
      ))}
    </div>
  );
};

export default App;