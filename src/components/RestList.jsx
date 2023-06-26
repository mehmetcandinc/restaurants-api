import { useState, useEffect } from "react";
import axios from "axios"; // installed axios `npm i axios`
//COMPONENTS
import SingleRest from "./SingleRest";

const RestList = () => {
  const [rests, setRests] = useState([]);

  const fetchRests = async () => {
    const response = await axios.get(
      "https://random-data-api.com/api/restaurant/random_restaurant?size=10"
    );
    setRests(response.data);
  };
  useEffect(() => {
    fetchRests();
  }, []);

  return (
    <div className="rests-list">
      {rests.map((rest, i) => (
        <SingleRest key={i} rest={rest} />
      ))}
    </div>
  );
};

export default RestList;
