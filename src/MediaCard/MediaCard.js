import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default function MediaCard({ character, index }) {
  const useStyles = makeStyles({
    root: {
      marginTop: 30,
      marginBottom: 30
    },
    media: {
      height: 140
    }
  });

  const classes = useStyles();
  const thumbnailImage = character.thumbnail;
  return (
    <Card className={classes.root}>
      <CardActionArea key={index}>
        <CardMedia
          className={classes.media}
          image={`${thumbnailImage.path}.${thumbnailImage.extension}`}
          title="Contemplative Character"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {character.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/${character.id}`}>About</Link>
        {character &&
          character.urls.map((url, index) => (
            <a href={url.url} size="small" color="primary">
              {url.type}
            </a>
          ))}
      </CardActions>
    </Card>
  );
}
