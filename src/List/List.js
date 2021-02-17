import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../MediaCard";
import * as Api from "../Api";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

export default function List() {
  // State
  const [characters, setCharacters] = useState(null);
  const useStyles = makeStyles({
    link: {
      fontSize: "12px",
      textDecoration: "none"
    }
  });

  // Effects
  useEffect(() => {
    api();
  }, []);

  async function api() {
    // Prepare response
    let response;
    try {
      response = await Api.fetchCaharacters();
      setCharacters(response);
    } catch (error) {
      // Handle error;
      console.error("Something went wrong");
      return null;
    }

    return response;
  }

  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      {characters &&
        characters.map((character, index) => (
          <Grid item sm={12} md={3} key={index}>
            <Link className={classes.link} to={`/${character.id}`}>
              <MediaCard character={character} index={index} />
            </Link>
          </Grid>
        ))}
    </Grid>
  );
}
