import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

const options1 = {
  method: "GET",
  url: "https://api.imgflip.com/get_memes",
};

const getMemes = async (options) => {
  const response = await axios.request(options);
  const memes = await response.data.data.memes;
  return memes;
};

const getMeme = async (options) => {
  const response = await axios.request(options);
  return response.data;
};
const memes = getMemes(options1);

//inputs

const TextMemeInput = ({ setText, id }) => {
  // console.log(id);
  return (
    <input
      className="input form-control"
      type="text"
      placeholder="Text Top"
      required
      onChange={(e) =>
        setText((prevTexts) => {
          prevTexts[id] = e.target.value;
          return prevTexts;
        })
      }
    />
  );
};

//Loader function

const displyaLoading = () => {
  const loader = document.querySelector(".loader");
  loader.style.display = "flex";
  setTimeout(() => (loader.style.display = "none"), 3000);
};

const Main = () => {
  // state declaration
  const [img, setImage] = useState("./son.png");
  const [api, setApi] = useState({
    template_id: 1,
    boxCount: 2,
  });
  const [memeTexts, setMemeTexts] = useState([]);

  // get a random meme picture from the api
  const handelClick = () => {
    const disabled = document.querySelector(".disabled");
    if (disabled) {
      disabled.classList.remove("disabled");
    }

    // loader effect
    displyaLoading();
    // handel promise
    memes.then((response) => {
      let randomNumber = Math.floor(Math.random() * 100);
      setApi({
        template_id: response[randomNumber].id,
        boxCount: response[randomNumber].box_count,
      });
      setImage(`${response[randomNumber].url}`);
      setMemeTexts(() => {
        let newArrayTexts = [];
        for (let i = 0; i < response[randomNumber].box_count; i++) {
          newArrayTexts.push("text" + i);
        }
        return newArrayTexts;
      });
    });
  };
  //

  // post to api to generateMeme
  const generateMeme = (e) => {
    e.preventDefault();
    displyaLoading();
    const options = {
      method: "POST",
      url: "https://api.imgflip.com/caption_image",

      params: {
        template_id: `${api.template_id}`,
        username: "houssainaddali",
        password: "Hazard10",
        "boxes[0][text]": `${memeTexts[0] || ""}`,

        "boxes[1][text]": `${memeTexts[1] || ""}`,
        "boxes[2][text]": `${memeTexts[2] || ""}`,

        "boxes[3][text]": `${memeTexts[3] || ""}`,

        "boxes[4][text]": `${memeTexts[4] || ""}`,
      },
    };
    const memeGenerated = getMeme(options);
    memeGenerated.then((response) => {
      setImage(`${response.data.url}`);
    });
  };

  ///

  return (
    <div className="meme" style={{ padding: "7rem 10px" }}>
      <form
        className="container form center text-center"
        onSubmit={(e) => generateMeme(e)}
        style={{
          textAlign: "center",
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {memeTexts.map((item, index) => (
            <TextMemeInput key={index} setText={setMemeTexts} id={index} />
          ))}
        </div>

        <button
          className="btn disabled btn-success btn-lg btn-block "
          style={{
            maxWidth: "400px",
          }}
        >
          Generate meme
        </button>
      </form>

      <div
        className="center "
        style={{ textAlign: "-webkit-center", paddingTop: "2rem" }}
      >
        <button
          className="btn btn-primary btn-lg btn-block"
          style={{ textAlign: "center", maxWidth: "400px" }}
          onClick={handelClick}
        >
          Change meme picture
        </button>
      </div>

      <div
        className=" container center"
        style={{ textAlign: "center", padding: "2rem 0" }}
      >
        <img src={img} className="img-fluid" style={{ width: "500px" }} />
      </div>
    </div>
  );
};

export default Main;
