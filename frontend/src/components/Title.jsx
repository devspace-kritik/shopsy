import React from "react";
import "./title.css";

const Title = ({ text1, text2 }) => {
  return (
    <div className="titleContainer">
      <p className="title1">
        {text1} <span className="title2">{text2}</span>
      </p>
      <p className="titleLine"></p>
    </div>
  );
};

export default Title;
