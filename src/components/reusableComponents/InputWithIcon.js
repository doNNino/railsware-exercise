import React from "react";

export default function InputWithIcon(props) {
  const { type } = props;
  let placeholder = "";
  let iconToUse = "";
  let colorToUse = "";
  // switch that determines which type of input to use
  switch (type) {
    case "email":
      placeholder = "example@email.com";
      iconToUse = "fa fa-user email-icon-style";
      colorToUse = "primary-input-with-icon";
      break;
    case "password":
      placeholder = "password";
      iconToUse = "fa fa-lock password-icon-style";
      colorToUse = "secondary-input-with-icon";
      break;
    default:
      break;
  }

  return (
    <>
      <div className="div-input-with-icon default-margin-top">
        <input
          className={colorToUse}
          type="text"
          placeholder={placeholder}
        ></input>
        <i className={iconToUse} aria-hidden="true"></i>
      </div>
      {type === "password" && (
        <a href="/" rel="noreferrer" className="password-message-style">
          Forgot Password?
        </a>
      )}
    </>
  );
}
