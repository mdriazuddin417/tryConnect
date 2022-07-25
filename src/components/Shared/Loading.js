import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
const Loading = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_2jraenvx.json"
        style={{ height: "250px", width: "250px" }}
      >
        <Controls buttons={["play", "repeat", "frame", "debug"]} />
      </Player>
    </div>
  );
};

export default Loading;
