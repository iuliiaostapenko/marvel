import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default function MediaCard({ character, index }) {
  const useStyles = makeStyles({
    root: {
      margin: "30px 0 0",
      position: "relative",
      "&:hover": {
        backgroundColor: "#e62429"
      }
    },
    title: {
      fontSize: "1rem",
      color: "black",
      textTransform: "uppercase"
    },
    media: {
      height: "140px",
      borderBottom: "4px solid #e62429"
    },
    rectangleSpace: {
      height: "40px"
    },
    link: {
      fontSize: "12px"
    },
    titleWrap: {
      height: "5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
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
        <CardContent className={classes.titleWrap}>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {character.name}
          </Typography>
          <div className={classes.rectangleSpace}></div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
