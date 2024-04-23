import React from "react";
import "../../App";
import { Button } from "../buttons/Button";
import "./TopV.css";

function eyecatch() {
  return (
    <div className="eyecatch-container">
      <video src="videos/world.mp4" autoPlay loop muted />
      <h1>Ready?</h1>
      <p>Test your knowledge...</p>
      <div className="eyecatch-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/quiz"
        >
          {" "}
          Lets go!
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          {" "}
          Top Brains <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default eyecatch;
