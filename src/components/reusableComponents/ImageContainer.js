import React from "react";

export default function ImageContainer(props) {
  const { imageSrc } = props;
  return (
    <div>
      <img src={imageSrc} className="w-100" alt="login page svg" />
    </div>
  );
}
