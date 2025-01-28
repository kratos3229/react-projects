import { useState } from "react";

const Accordian = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="accordion-card">
      <div className="header" onClick={() => setIsActive((prev) => !prev)}>
        <div>{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>

      <div className="content">
        {isActive && <p className="card-info">{content}</p>}
      </div>
    </section>
  );
};

export default Accordian;
