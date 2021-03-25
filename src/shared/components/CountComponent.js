import React, { useState } from "react";
import { Button } from 'reactstrap';

const CountHooks = ({title}) => {
  const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);
  const subtract = () => setCount(count - 1);

  return (
    <div className="count">
      <h2>Hooks - useState</h2>
      <nav className="nav">
        <Button onClick={add} color="success">+</Button>
        <Button onClick={subtract} color="danger">-</Button>
      </nav>
      <h3 className="count__count-info">
        Contador de {title} {count}
      </h3>
    </div>
  );
}

CountHooks.defaultProps = {
  title: 'Clicks: '
};

export default CountHooks;