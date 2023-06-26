import React from "react";

const SingleRest = ({ rest }) => {
  const generateRandomImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * 1000);
    const imageUrl = `https://loremflickr.com/500/500/restaurant?random=${randomIndex}`; // Double AltGr + , --> ``
    return imageUrl;
  };

  const urlArray = [];
  const randomImageUrl = generateRandomImageUrl();
  urlArray.push(randomImageUrl);

  return (
    <div key={rest.id} className="single-rest">
      {urlArray.map((logo, i) => (
        <img
          key={i}
          className="restaurants-logo"
          src={logo}
          alt="restaurant-logo"
        />
      ))}{" "}
      <br></br>
      <p>{rest.name}</p>
    </div>
  );
};

export default SingleRest;
