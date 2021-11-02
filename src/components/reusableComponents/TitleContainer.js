import React from "react";

export default function TitleContainer(props) {
  const { titleContent } = props;
  return (
    <div className="w-100">
      <p className="w-100 title">{titleContent}</p>
    </div>
  );
}
