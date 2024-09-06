import React from "react";
import trollFace from "../images/Troll Face.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header--logo" src={trollFace}></img>
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course-project 3</h4>
    </header>
  );
}
