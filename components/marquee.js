import React from "react";
import Marquee from "react-fast-marquee";

const App = () => (
  <Marquee
    className="flex gap-4  bg-gray-100"
    speed={80}
    gradient={true}
    gradientWidth={100}
    pauseOnClick={true}
    direction="left"
    loop={0}
  >
    {Array.from({ length: 18 }).map((_, index) => (
      <img
        key={index}
        src="/images/comman/Logo.png"
        alt={`Logo ${index + 1}`}
        className="ml-10"
      />
    ))}
    <p className="text-xl font-semibold">Hello</p>
  </Marquee>
);

export default App;
