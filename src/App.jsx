import React, { useState, useEffect } from "react"; // Import React and hooks
import TourCard from "./components/TourCard"; // Import the TourCard component

const App = () => {
  const [tours, setTours] = useState([]); // State to store the list of tours
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to store any errors

  // Function to remove a tour by its ID
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id)); // Filter out the tour with the given ID
  };

  // Fetch tours data from the API when the component mounts
  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch(
          "https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project" // API URL
        );
        if (!response.ok) {
          throw new Error("Failed to fetch tours"); // Throw an error if the response is not OK
        }
        const data = await response.json(); // Parse the JSON response
        setTours(data); // Update the tours state with the fetched data
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message); // Set the error message if an error occurs
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchTours(); // Call the fetchTours function
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Show a loading message while data is being fetched
  if (loading) {
    return <h2>Loading...</h2>; // Display a loading message
  }

  // Show an error message if there is an error
  if (error) {
    return <h2>Error: {error}</h2>; // Display the error message
  }

  return (
    <div>
      <h1>Tours</h1> {/* Page title */}
      {tours.length === 0 ? ( // Check if there are no tours left
        <div>
          <h2>No tours left</h2> {/* Message when no tours are left */}
          <button onClick={() => window.location.reload()}>Refresh</button> {/* Refresh button */}
        </div>
      ) : (
        <div className="gallery">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} onRemove={removeTour} /> // Render a TourCard for each tour
          ))}
        </div>
      )}
    </div>
  );
};

export default App; // Export the App component