import { useState } from "react";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
  };

  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      <button
        onClick={handleClick}
        style={{
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor === "#1b1b1b" ? "White Theme" : "Black Theme"}
      </button>

      <section className="content">
        <h1 style={{ color: textColor }}>Welcome</h1>
      </section>
    </div>
  );
};

export default ToggleBackgroundColor;
