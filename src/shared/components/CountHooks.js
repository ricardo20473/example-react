import React, { useState } from "react";

export default function CountHooks(props) {
  const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);
  const subtract = () => setCount(count - 1);

  return (
    <div className="count">
      <h2>Hooks - useState</h2>
      <nav className="nav">
        <button onClick={add} className="btn btn-success">+</button>
        <button onClick={subtract} className="btn btn-danger">-</button>
      </nav>
      <h3 className="count__count-info">
        Contador de {props.title} {count}
      </h3>
    </div>
  );
}

CountHooks.defaultProps = {
  title: 'Clicks: '
};