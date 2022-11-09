import React from "react";
import Header from "./header";
import MenuCont from "./menuContainer";
import "./container.css";

function Container() {
  return (
    <div className="container">
      <Header />
      <MenuCont />
    </div>
  );
}

export default Container;