import React from "react";

export default function InputWithoutIcon(props) {
  const { type, placeholder, color, removeMargin } = props;
  let customStyle = removeMargin ? { marginTop: "0px" } : {};
  let typeToUse = "";
  // switch that determines which type of input to use
  switch (type) {
    case "normal":
      typeToUse = "-normal-input-without-icon";
      break;
    case "small":
      typeToUse = "-small-input-without-icon";
      break;
    default:
      break;
  }

  return (
    <>
      <div className="default-margin-top" style={customStyle}>
        <input
          className={color + typeToUse}
          type="text"
          placeholder={placeholder}
        ></input>
      </div>
    </>
  );
}
