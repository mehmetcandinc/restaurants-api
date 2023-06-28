import React, { useState } from "react";
import "./SingleRest.css";
//Card Profile e.g. https://mui.com/material-ui/react-card/ & get all API elements except ids
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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

  const [expanded, setExpanded] = useState(false);
  const [expandedHours, setExpandedHours] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClickHours = () => {
    setExpandedHours(!expandedHours);
  };
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <CardActionArea {...other} />;
  })(({ theme, expand }) => ({
    marginLeft: "auto",
  }));
  const ExpandMoreHours = styled((props) => {
    const { expandHours, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expandHours }) => ({
    transform: !expandHours ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Card className="rest-card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CardHeader title={rest.name} subheader={<p>Type: {rest.type}</p>} />
          {urlArray.map((logo, i) => (
            <CardMedia
              key={i}
              component="img"
              // height="194" THINK
              image={logo}
              alt="Restaurant Image"
            />
          ))}
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              "{rest.review}"
            </Typography>
          </CardContent>
          <CardActions disableSpacing></CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description: </Typography>
              <Typography paragraph>{rest.description}</Typography>
            </CardContent>
          </Collapse>
        </ExpandMore>
      </CardActionArea>
      <ExpandMoreHours
        title="Working Hours"
        expand={expandedHours}
        onClick={handleExpandClickHours}
        aria-expanded={expandedHours}
        aria-label="show more"
      >
        Working Hours <ExpandMoreIcon />
      </ExpandMoreHours>
      <Collapse in={expandedHours} timeout="auto" unmountOnExit></Collapse>
    </Card>
  );
};

export default SingleRest;
