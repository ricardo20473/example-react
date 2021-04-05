import React, { useState, useEffect } from "react";
import { Button } from 'reactstrap';

function Reloj({hour}) {
  return <h3>Time: {hour}</h3>;
};

const ClockHooks = () => {

  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temp;
    if (visible) {
      temp = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temp);
    }

    return () => {
      // Fase Destroy
      clearInterval(temp);
    };
  }, [visible]);

  return (
    <div className="scroll">
      <h2>Reloj con Hooks</h2>

      {visible && <Reloj hour={hour}/>}

      <nav className="nav">
        <Button onClick={() => setVisible(true)} color="success">Play</Button>
        <Button onClick={() => setVisible(false)} color="danger">Stop</Button>
      </nav>
    </div>
  );
}

export default ClockHooks;
