import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import "./Navbar.css"
import "./App";
import App from "./App";



ReactDOM.render(
  <>
    <App />

    <h1 className="heading_style">Best Weapons for you</h1>

    <Card
      imgsrc="https://picsum.photos/200/300"
      title="Weapon 1 "
      sname="Knife "
      link=" https://www.google.com/"
    />
    <Card
      imgsrc="https://picsum.photos/200/300"
      title="Weapon 2 "
      sname=" Axe"
      link=" https://www.facebook.com/"
    />

    <Card
      imgsrc="https://picsum.photos/200/300"
      title=" Weapon 3 "
      sname=" Spiked Mace"
      link=" https://www.twitter.com/"
    />

    <Card
      imgsrc="https://picsum.photos/200/300"
      title="Weapon 4 "
      sname=" Hammer"
      link=" https://www.instagram.com/"

    />
    <Card
      imgsrc="https://picsum.photos/200/300"
      title="Weapon 5 "
      sname=" Sword"
      link=" https://www.instagram.com/"

    />
    <Card
      imgsrc="https://picsum.photos/200/300"
      title="Weapon 6 "
      sname=" Hatchet"
      link=" https://www.instagram.com/"



    />

  </>,
  document.getElementById("root")

);
