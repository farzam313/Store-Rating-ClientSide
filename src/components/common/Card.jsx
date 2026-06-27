import React from "react";

const Card = ({ children, className = "", ...props }) => {
  return (
    <div className={` ${className} `.trim()} {...props}>
      {children}
    </div>
  );
};

export default Card;
