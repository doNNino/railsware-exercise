import React from "react";
// custom imports
import upgradeSVG from "../images/upgradePage.svg";
// custom component imports
import Button from "./reusableComponents/Button";
import TitleContainer from "./reusableComponents/TitleContainer";
import ImageContainer from "./reusableComponents/ImageContainer";
import CreditCardForm from "./reusableComponents/CreditCardForm";

export default function UpgradePage() {
  return (
    <div className="w-100 h-100 page-main-div">
      <TitleContainer titleContent="Get Pro Account" />
      <ImageContainer imageSrc={upgradeSVG} />
      <CreditCardForm />
      <Button type="normal" color="senary" content="UPGRADE" />
    </div>
  );
}
