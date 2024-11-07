//
import { useState, useEffect } from "react";

// Custom hook to fetch and refresh location data
function useRefresh(locationName) {
  const [data, setData] = useState(null); // store the data after fetching from API.

  const [error, setError] = useState(null); // To handle error if occur while fetching data.

  // API endpoint to fetch country's information.
  const apiUrl = `https://restcountries.com/v3.1/name/${locationName}`;

  // Function to fetch data from the API and update state.
  // async -await using to make refreshData function to asynchronous function.
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const result = await response.json();
      setData(result[0]);
    } catch (err) {
      setError(err.message);
    }
  };
  // useEffect to call freshData when the component render
  useEffect(() => {
    fetchData();
  }, [locationName]); //refreshes if locationName changes

  return { data, error, fetchData };
}

export default useRefresh;
