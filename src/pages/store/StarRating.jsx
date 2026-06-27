import React from "react";
import { LuStar, LuStarHalf, LuStarOff } from "react-icons/lu";

const StarRating = ({ rating = 0 }) => {
  const totalStars = 5;
  const starsArray = [];
  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      starsArray.push(
        <LuStar key={i} className="text-yellow-500 fill-yellow-500 text-xl" />,
      );
    } else if (i - 0.5 <= rating) {
      starsArray.push(
        <LuStarHalf
          key={i}
          className="text-yellow-500 fill-yellow-500 text-xl"
        />,
      );
    } else {
      starsArray.push(<LuStar key={i} className="text-gray-300 text-xl" />);
    }
  }

  return (
    <div className="flex gap-1 items-center">
      {starsArray}
      <span className="text-gray-600 text-sm font-bold">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default StarRating;
