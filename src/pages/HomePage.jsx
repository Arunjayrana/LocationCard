import React from "react";
import LocationCard from "../components/LocationCard";
import useRefresh from "../hooks/useRefresh";
import ChildComponent from "../components/ChildComponent";

function HomePage() {
  const country = [
    "India",
    "Afganistan",
    "Uk",
    "Pakistan",
    "Myanmar",
    "United",
    "Taiwan",
    "Russia",
  ];

  return (
    <div className="home">
      <center>
        <h1>Information about Countries</h1>

        <div className="container">
          {country.map((locationName) => {
            const { data, error, fetchData } = useRefresh(locationName);

            // Nest ChildComponent within LocationCard to pass it as children
            return (
              <LocationCard
                key={locationName}
                location={locationName}
                data={data}
                error={error}
                fetchData={fetchData}
                child={<ChildComponent />}
              ></LocationCard>
            );
          })}
        </div>
      </center>
    </div>
  );
}

export default HomePage;
