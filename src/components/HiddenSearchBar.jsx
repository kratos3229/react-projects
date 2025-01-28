import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [backgroundColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1a1a1a");

    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("white");
    }
  };

  return (
    <section
      className="container"
      style={{
        backgroundColor,
      }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default HiddenSearchBar;
