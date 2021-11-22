import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo";

const App = () => {
  // return React.createElement(
  //   "div",
  //   { id: "parent" },
  //   React.createElement("div", {}, [
  //     React.createElement("h3", {}, "Your todos"),
  //     React.createElement(Todo, { title: "Learn reasdssdct", date: "01.01.2022" }),
  //     React.createElement(Todo, { title: "Learn redux", date: "01.02.2022" }),
  //     React.createElement(Todo, { title: "Learn angular", date: "01.03.2022" }),


  //   ])
  // );

  return (
    <div>
      <div>Your ToDos</div>
      <Todo title="Learn react" date="01.01.2022" />
      <Todo title="Learn redux" date="01.02.2022" />
      <Todo title="Learn angular" date="01.03.2022" />
    </div>
  )
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
