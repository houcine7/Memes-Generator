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
  console.log(response);
  return response.data;
};
const memes = getMemes(options1);

const Main = () => {
  const [img, setImage] = useState("./son.png");
  const [templateId, setTemplateId] = useState(1);
  const [textTop, setTextTop] = useState("");
  const [textBottom, setTextBottom] = useState("");
  const handelClick = () => {
    const disabled = document.querySelector(".disabled");
    if (disabled) {
      disabled.classList.remove("disabled");
    }
    memes.then((response) => {
      let randomNumber = Math.floor(Math.random() * 100);
      setImage(`${response[randomNumber].url}`);
      setTemplateId(`${response[randomNumber].id}`);
    });
  };
  const generateMeme = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      url: "https://api.imgflip.com/caption_image",

      params: {
        template_id: `${templateId}`,
        username: "houssainaddali",
        password: "Hazard10",
        text0: `${textTop}`,
        text1: `${textBottom}`,
      },
    };
    const memeGenerated = getMeme(options);
    memeGenerated.then((response) => {
      console.log(response.data.url);
      setImage(`${response.data.url}`);
    });
  };

  return (
    <div className="meme" style={{ padding: "7rem" }}>
      <div className="container">
        <form
          onSubmit={(e) => generateMeme(e)}
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",

            justifyContent: "center",
          }}
        >
          <input
            className="input form-control"
            type="text"
            placeholder="Text Top"
            required
            onChange={(e) => setTextTop(e.target.value)}
          />
          <input
            className="input form-control"
            type="text"
            placeholder="Text Bottom"
            required
            onChange={(e) => setTextBottom(e.target.value)}
          />
          <button
            className="btn disabled btn-success btn-lg btn-block "
            style={{ textAlign: "center", width: "400px" }}
          >
            Generate meme
          </button>
        </form>
      </div>
      <div
        className="container center "
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
