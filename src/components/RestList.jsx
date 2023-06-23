import { useState, useEffect } from "react";
import axios from "axios";
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
  let image = document.createElement("img");
  image.classList.add("card-img-top");
  image.src = `${rests}?random=${Math.random()}`; // notice this
  console.log(image.src);
  return (
    <div className="rests-list">
      {rests.map((rest, i) => (
        <>
          <SingleRest rest={rest} />
          <img
            src={"https://loremflickr.com/500/500/restaurant?random=1"} //ERROR SAME PHOTO PROMLEMS
            alt="res"
          />
        </>
      ))}
    </div>
  );
};

export default RestList;
