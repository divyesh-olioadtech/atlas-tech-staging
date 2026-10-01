import React from "react";

const CardComponent = () => {
  const cards = [
    { id: 1, imageUrl: "/images/image1.jpg", hoverColor: "bg-red-500" },
    { id: 2, imageUrl: "/images/image2.jpg", hoverColor: "bg-blue-500" },
    { id: 3, imageUrl: "/images/image3.jpg", hoverColor: "bg-green-500" },
  ];

  return (
    <div className="flex justify-around p-5">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative w-48 h-72 bg-cover bg-center transition-transform transform hover:scale-105 overflow-hidden"
          style={{ backgroundImage: `url(${card.imageUrl})` }}
        >
          <div
            className={`absolute inset-0 transition-colors duration-300 ${card.hoverColor} opacity-0 hover:opacity-100`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
