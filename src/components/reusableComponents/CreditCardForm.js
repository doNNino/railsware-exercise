import React from "react";
//custom inputs
import InputWithoutIcon from "./InputWithoutIcon";

export default function CreditCardForm() {
  return (
    <>
      <InputWithoutIcon
        type="normal"
        color="primary"
        placeholder="Card Number"
      />
      <div className="media-buttons-div">
        <InputWithoutIcon type="small" color="secondary" placeholder="MM/YY" />{" "}
        <div>
          <InputWithoutIcon type="small" color="secondary" placeholder="CVV" />
          <p style={{ textAlign: "end", color: "#767676" }}>What's this?</p>
        </div>
      </div>
      <InputWithoutIcon
        type="normal"
        color="secondary"
        placeholder="ZIP/Postal Code"
        removeMargin={true}
      />
    </>
  );
}
