import React, { useState, useEffect } from "react";
import memeDatas from "../memesData";

export default function Meme() {
  const [memeData, setMemeData] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemeImages, setAllMemeImages] = useState([]);
  function getImage() {
    const memes = allMemeImages;
    const randomIndex = Math.floor(Math.random() * (memes.length - 1));
    console.log("index>>", randomIndex);

    const imageUrl = memes[randomIndex].url;
    console.log(memes[randomIndex]);
    console.log("url>>", imageUrl);

    setMemeData((prevMemeData) => {
      return { ...prevMemeData, randomImage: imageUrl };
    });
  }
  function textChange(event) {
    const { name, value } = event.target;

    setMemeData((prevMemeData) => {
      return { ...prevMemeData, [name]: value };
    });
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("res>>", res.data.memes);
        return setAllMemeImages(res.data.memes);
      });
  }, []);

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--inputs"
          placeholder="Top text"
          name="topText"
          onChange={textChange}
        />
        <input
          type="text"
          className="form--inputs"
          placeholder="Bottom text"
          name="bottomText"
          onChange={textChange}
        />
        <button onClick={getImage} className="form--button">
          Get a new meme image
        </button>
      </div>
      {memeData && (
        <div>
          <img
            src={memeData.randomImage}
            alt="meme image lies here "
            className="meme--image"
          ></img>
          <div className="text-container">
            <h1 className="top-text">{memeData.topText}</h1>
            <h1 className="bottom-text">{memeData.bottomText}</h1>
          </div>
        </div>
      )}
    </main>
  );
}
