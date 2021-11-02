import React from "react";

export default function Button(props) {
  // props destructuring
  const { type, color, content } = props;
  let classesToUse = "";
  // swich that determines which type of button to use
  switch (type) {
    case "normal":
      classesToUse = "normal-btn";
      break;
    case "media":
      classesToUse = "media-btn";
      break;
    default:
      break;
  }
  // switch that determines which color to use
  switch (color) {
    case "primary":
      classesToUse += "-primary";
      break;
    case "quaternary":
      classesToUse += "-quaternary";
      break;
    case "quinary":
      classesToUse += "-quinary";
      break;
    case "senary":
      classesToUse += "-senary";
      break;
    default:
      break;
  }
  return (
    <div className="default-margin-top">
      <button className={classesToUse}>{content}</button>
    </div>
  );
}
