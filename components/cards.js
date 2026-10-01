import React, { useState } from "react";
import { useRouter } from "next/router";

const CardComponent = () => {
  const router = useRouter();

  const cards = [
    {
      id: 1,
      title: "Card One",
      description: "This is the first card.",
      imageUrl: "/images/comman/dump.png",
      url: "/card-one",
    },
    {
      id: 2,
      title: "Card Two",
      description: "This is the second card.",
      imageUrl: "/images/comman/dump.png",
      url: "/card-two",
    },
    {
      id: 3,
      title: "Card Three",
      description: "This is the third card.",
      imageUrl: "/images/comman/dump.png",
      url: "/card-three",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (id) => {
    setHoveredCard(id);
  };

  const handleLeave = () => {
    setHoveredCard(null);
  };

  const handleClick = (url) => {
    router.push(url); // Navigate to the specified URL
  };

  return (
    <div className="flex justify-around p-5 gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`relative w-48 h-72 bg-cover bg-center transition-transform transform ${
            hoveredCard === card.id ? "scale-105" : ""
          } overflow-hidden rounded-2xl shadow-md cursor-pointer`}
          style={{ backgroundImage: `url(${card.imageUrl})` }}
          onMouseEnter={() => handleHover(card.id)}
          onMouseLeave={handleLeave}
          onTouchStart={() => handleHover(card.id)}
          onTouchEnd={handleLeave}
          onClick={() => handleClick(card.url)} // Navigate on click
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ${
              hoveredCard === card.id ? "opacity-50" : "opacity-70"
            } flex flex-col justify-center items-center text-white`}
          >
            {/* Title in Rest Mode */}
            {hoveredCard !== card.id && (
              <h2 className="text-xl font-semibold">{card.title}</h2>
            )}
            {/* Description and Button on Hover/Touch */}
            {hoveredCard === card.id && (
              <>
                <p className="text-lg font-bold mb-2">{card.description}</p>
                <button className="mt-3 px-4 py-2 bg-white text-black rounded-lg shadow hover:bg-gray-200">
                  Go
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
