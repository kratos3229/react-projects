import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") return; // Prevent empty todos
    setTodos((todos) => [
      ...todos,
      {
        text: input,
        id: Math.floor(Math.random() * 10000), // Use a higher range for unique IDs
      },
    ]);

    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        placeholder="Todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
