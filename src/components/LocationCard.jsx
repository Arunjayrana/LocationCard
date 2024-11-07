import React, { useState } from "react";
import "./LocationCard.css";

// LocationCard component to display information about a specific location
function LocationCard({ location, data, error, fetchData, child }) {
  const [refreshCount, setRefreshCount] = useState(0); // State to track of refresh count, used to re-render

  // Function to handle refresh button click
  const handleRefresh = () => {
    fetchData(); // Call refreshData function to get new data
    setRefreshCount((count) => count + 1); // Update refresh count to re-render
  };

  return (
    <center>
      <div className="location-card" key={refreshCount}>
        <h2>{data ? data.name.common : location}</h2>

        {/* Display the flag image if  flag image is available in the data */}
        {data && data.flags && data.flags.png && (
          <img
            src={data.flags.png}
            alt={data.name.common}
            className="flag-image"
          />
        )}

        <p>Latitude: {data && data.latlng ? data.latlng[0] : "N/A"}</p>
        <p>Longitude: {data && data.latlng ? data.latlng[1] : "N/A"}</p>

        <p>
          Population:
          {data && data.population ? data.population.toLocaleString() : "N/A"}
        </p>

        {/* Display an error message if there is an error */}
        {error && <p>Error: {error}</p>}

        {/* Button to refresh the data */}
        <button onClick={handleRefresh}>Refresh</button>

        {/*child components passed in as a prop from the HomePage*/}
        <div>{child}</div>
      </div>
    </center>
  );
}

export default LocationCard;
