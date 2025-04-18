import React from "react";
import { createRoot } from "react-dom/client";

let Card = ({ name, imgSrc, imgAlt, phoneNbr, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgSrc} alt={imgAlt} />
      <p>{phoneNbr}</p>
      <p>{email}</p>
    </div>
  );
};

let root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      imgSrc="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      imgAlt="avatar_img"
      phoneNbr="+123 456 789"
      email="b@beyonce.com"
    />

    <Card
      name="Jack Bauer"
      imgSrc="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      imgAlt="avatar_img"
      phoneNbr="+987 654 321"
      email="jack@nowhere.com"
    />

    <Card
      name="Chuck Norris"
      imgSrc="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      imgAlt="avatar_img"
      phoneNbr="+918 372 574"
      email="gmail@chucknorris.com"
    />
  </div>
);
