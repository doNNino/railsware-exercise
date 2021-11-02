import React from "react";
//custom imports
import passwordSvg from "../images/passwordPage.svg";
// custom components imoprts
import ImageContainer from "./reusableComponents/ImageContainer";
import TitleContainer from "./reusableComponents/TitleContainer";
import InputWithIcon from "./reusableComponents/InputWithIcon";
import Button from "./reusableComponents/Button";

export default function PasswordPage() {
  return (
    <div className="w-100 h-100 page-main-div default-padding-top">
      <ImageContainer imageSrc={passwordSvg} />
      <TitleContainer titleContent="Forgot Password" />
      <InputWithIcon type="email" />
      <Button type="normal" color="primary" content="RESET" />
      <p className="password-information-style">
        Already have an account?{" "}
        <a href="/" rel="noreferrer" className="password-message-style">
          Login here
        </a>
      </p>
    </div>
  );
}
