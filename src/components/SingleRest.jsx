import React from "react";
//Card Profile e.g. https://mui.com/material-ui/react-card/ & get all API elements except ids
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {urlArray.map((logo, i) => (
          <CardMedia
            key={i}
            component="img"
            className="restaurants-logo"
            src={logo}
            alt="restaurant-logo"
          />
        ))}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {rest.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {rest.review}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SingleRest;
