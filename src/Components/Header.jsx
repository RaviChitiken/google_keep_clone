import React from "react";

const logo =
  "https://img.icons8.com/external-flat-bartama-graphic/64/000000/external-bulb-startup-flat-bartama-graphic.png";

const Header = () => {
  return (
    <>
      <div className="container mx-auto mx-0 px-0">
        <div className="row my-3 mx-0">
          <div className="col-3 px-0 text-center mx-auto">
            <img className="logo" src={logo} alt="logo" />
            <span className="brand">Keep</span>
          </div>
          <div className="col-9 px-0 text-center my-auto mx-auto"></div>
        </div>
        <hr className="my-3" />
      </div>
    </>
  );
};

export default Header;
