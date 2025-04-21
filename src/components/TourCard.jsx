import React, { useState } from "react"; // Import React and the useState hook

const TourCard = ({ tour, onRemove }) => {
  const { id, name, info, image, price } = tour; // Destructure the tour object
  const [showInfo, setShowInfo] = useState(false); // State to toggle showing full info

  return (
    <div className="tour-card" style={styles.card}> {/* Card container */}
      <img src={image} alt={name} style={styles.image} /> {/* Tour image */}
      <div style={styles.content}> {/* Content container */}
        <h2 style={styles.title}>{name}</h2> {/* Tour name */}
        <h4 style={styles.price}>${price}</h4> {/* Tour price */}
        <p style={styles.info}>
          {showInfo ? info : `${info.substring(0, 100)}...`} {/* Show full or truncated info */}
          <button
            onClick={() => setShowInfo(!showInfo)} // Toggle showInfo state
            style={styles.toggleButton}
          >
            {showInfo ? "Show Less" : "Read More"} {/* Button text based on state */}
          </button>
        </p>
        <button
          onClick={() => onRemove(id)} // Call onRemove with the tour ID
          style={styles.removeButton}
        >
          Not Interested {/* Button to remove the tour */}
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd", // Card border
    borderRadius: "8px", // Rounded corners
    overflow: "hidden", // Prevent content overflow
    margin: "16px", // Margin around the card
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow effect
    maxWidth: "400px", // Maximum width of the card
  },
  image: {
    width: "100%", // Full width of the card
    height: "200px", // Fixed height
    objectFit: "cover", // Maintain aspect ratio
  },
  content: {
    padding: "16px", // Padding inside the content
  },
  title: {
    fontSize: "1.5rem", // Font size for the title
    margin: "0 0 8px", // Margin below the title
  },
  price: {
    color: "#2a9d8f", // Green color for the price
    fontWeight: "bold", // Bold text
    margin: "0 0 16px", // Margin below the price
  },
  info: {
    fontSize: "0.9rem", // Smaller font size for info
    marginBottom: "16px", // Margin below the info
  },
  toggleButton: {
    background: "none", // No background
    border: "none", // No border
    color: "#007BFF", // Blue text color
    cursor: "pointer", // Pointer cursor on hover
    padding: "0", // No padding
    fontSize: "0.9rem", // Smaller font size
  },
  removeButton: {
    backgroundColor: "#e63946", // Red background color
    color: "#fff", // White text color
    border: "none", // No border
    padding: "8px 16px", // Padding inside the button
    borderRadius: "4px", // Rounded corners
    cursor: "pointer", // Pointer cursor on hover
  },
};

export default TourCard; // Export the TourCard component