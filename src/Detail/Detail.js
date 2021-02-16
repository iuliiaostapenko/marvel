import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../MediaCard";
import * as Api from "../Api";

export default function Detail() {
  // Params
  const params = useParams();
  const characterId = params.characterId;

  // State
  const [character, setCharacter] = useState(null);

  // Effects
  useEffect(() => {
    api();
  }, [characterId]);

  async function api() {
    // Prepare response
    let response;
    try {
      response = await Api.fetchCaharacter(characterId);
      setCharacter(response[0]);
    } catch (error) {
      // Handle error;
      console.error("Something went wrong");
      return null;
    }

    return response;
  }

  return (
    character && (
      <Grid container spacing={1}>
        <MediaCard character={character} />
      </Grid>
    )
  );
}
