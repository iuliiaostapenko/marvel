import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../MediaCard";
import * as Api from "../Api";

export default function List() {
  // State
  const [characters, setCharacters] = useState(null);

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

  return (
    <Grid container spacing={1}>
      {characters &&
        characters.map((character, index) => (
          <Grid item xs={6} sm={6} key={index}>
            <MediaCard character={character} index={index} />
          </Grid>
        ))}
    </Grid>
  );
}
