import React from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import "./style.css";
import Meals from "./components/Meals";
import Calculator from "./components/Calculator";
import ToggleBackgroundColor from "./components/ToggleBackgroundColor";
import HiddenSearchBar from "./components/HiddenSearchBar";
import Testimonials from "./components/Testimonials";
import Accordian from "./components/Accordian";

import { accordionData } from "../utils/content";
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <ToggleBackgroundColor /> */}
      {/* <HiddenSearchBar /> */}
      {/* <Testimonials /> */}
      {/* <div className="accordian">
        {accordionData.map(({ title, content }) => (
          <Accordian title={title} content={content} key={Math.random()} />
        ))}
      </div> */}
      <Form />
    </div>
  );
};

export default App;
