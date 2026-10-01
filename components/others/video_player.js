"use client";

import React from "react";
import dynamic from "next/dynamic";

// react-player is a client-only library; SSR-ing it causes a hydration
// mismatch, so load it on the client only.
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoPlayer = () => {
  return (
    <div className="relative rm w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-xl">
      <ReactPlayer
        url="/video/stock.mp4"
        playing={true}
        muted={true}
        loop={true}
        width="100%"
        height="100%"
        className="react-player"
      />
    </div>
  );
};

export default VideoPlayer;
