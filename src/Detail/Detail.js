import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tiles from "./Tiles";
import Ball from "./image/ball.gif";
import * as Api from "../Api";
import "./Detail.css";

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
  const thumbnailImage = character && character.thumbnail;
  const characterComics = character && character.comics;
  const characterSeries = character && character.series;
  const characterStories = character && character.stories;

  return (
    character && (
      <div>
        <div className="hero-banner-white">
          <div
            className="crazy-ball"
            style={{ backgroundImage: `url(${Ball})` }}
          >
            <div className="crazy-ball-picture">
              <img src={`${thumbnailImage.path}.${thumbnailImage.extension}`} />
            </div>
          </div>
          <h1>{character.name}</h1>
        </div>
        <Tiles title="Comics" items={characterComics} />
        <Tiles title="Series" items={characterSeries} />
        <Tiles title="Stories" items={characterStories} />
      </div>
    )
  );
}
