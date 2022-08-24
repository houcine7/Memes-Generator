import React from "react";
import Loader from "react-js-loader";

const style = {
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minHeight: "100%",
  minWidth: "100%",
};
const LoaderEff = ({ loading }) => {
  return (
    <div
      className="loader"
      style={{
        ...style,
        backgroundColor: !loading ? "#0b0b0b8c" : "ffffff",
        display: !loading ? "none" : "flex",
      }}
    >
      <Loader
        type="bubble-spin"
        size={150}
        bgColor={"#ffa201"}
        color={"#fff"}
      />
    </div>
  );
};

export default LoaderEff;
