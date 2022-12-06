import { useEffect, useState } from "react";

const Meme = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const memes = data;
        console.log(memes);
        setMemes(memes);
      });
  }, []);

  return memes.length ? <img src={memes} alt="" /> : <p>Meme not found</p>;
};

export default Meme;
