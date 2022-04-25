import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className="container mx-auto mx-0 px-0">
        <hr className="my-3" />
        <span className="year text-center d-block">© {year}</span>
      </div>
    </>
  );
};

export default Footer;
