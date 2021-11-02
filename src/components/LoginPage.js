import React from "react";
// custom imports
import loginSvg from "../images/loginPage.svg";
//components imports
import ImageContainer from "./reusableComponents/ImageContainer";
import TitleContainer from "./reusableComponents/TitleContainer";
import InputWithIcon from "./reusableComponents/InputWithIcon";
import Button from "./reusableComponents/Button";

export default function LoginPage() {
  return (
    <div className="w-100 h-100 page-main-div">
      <ImageContainer imageSrc={loginSvg} />
      <TitleContainer titleContent="Welcome Back!" />
      <InputWithIcon type="email" />
      <InputWithIcon type="password" />
      <Button type="normal" color="primary" content="LOG IN" />
      <p className="login-information-style">Or connect with social</p>
      <div className="media-buttons-div">
        <Button type="media" color="quaternary" content="Facebook" />
        <Button type="media" color="quinary" content="Google" />
      </div>
    </div>
  );
}
