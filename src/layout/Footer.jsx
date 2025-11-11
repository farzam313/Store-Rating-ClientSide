import React from "react";

const Footer = () => {
  return (
    <div className="w-full mb-0 p-0 ">
      <footer className="bg-gray-800 text-white  w-full text-center">
        <p>
          &copy; {new Date().getFullYear()} Store Rating System. All rights
          &copy;
        </p>
      </footer>
    </div>
  );
};

export default Footer;
