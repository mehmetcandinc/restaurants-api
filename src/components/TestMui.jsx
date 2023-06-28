import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardActionArea } from "@mui/material";
//TABLE
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <CardActionArea {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
}));
const ExpandMore2 = styled((props) => {
  const { expand2, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand2 }) => ({
  transform: !expand2 ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function RecipeReviewCard() {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CardHeader
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing></CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don&apos;t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>

              {/*  <ExpandMore
                title="ss"                                //TEST FAILED
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <Typography variant="h6" component="div">
                  Hours <ExpandMoreIcon sx={{ fontSize: 22 }} />
                </Typography>
              </ExpandMore> */}
            </CardContent>
          </Collapse>
        </ExpandMore>
      </CardActionArea>
      <ExpandMore2
        title="Working Hours"
        expand={expanded2}
        onClick={handleExpandClick2}
        aria-expanded={expanded2}
        aria-label="show more"
      >
        Working Hours <ExpandMoreIcon />
      </ExpandMore2>
      <Collapse in={expanded2} timeout="auto" unmountOnExit>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>DAYS</b>
                </TableCell>
                <TableCell align="right">Monday</TableCell>
                <TableCell align="right">Sunday</TableCell>
                <TableCell align="right">Friday</TableCell>
                <TableCell align="right">Friday</TableCell>
                <TableCell align="right">Friday</TableCell>
                <TableCell align="right">Friday</TableCell>
                <TableCell align="right">Friday</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>OPEN</TableCell>
                <TableCell align="right">10:00</TableCell>
                <TableCell align="right">11:22</TableCell>
                <TableCell align="right">09:22</TableCell>
                <TableCell align="right">09:22</TableCell>
                <TableCell align="right">09:22</TableCell>
                <TableCell align="right">09:22</TableCell>
                <TableCell align="right">09:22</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Close</TableCell>
                <TableCell align="right">21:22</TableCell>
                <TableCell align="right">23:22</TableCell>
                <TableCell align="right">21:22</TableCell>
                <TableCell align="right">00:22</TableCell>
                <TableCell align="right">21:22</TableCell>
                <TableCell align="right">21:22</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </Card>
  );
}
