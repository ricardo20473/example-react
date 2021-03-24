import React, { useState, useEffect } from "react";

function Reloj({hour}) {
  return <h3>{hour}</h3>;
};

export default function ClockHooks() {

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
      console.log('Fase Destroy');
      clearInterval(temp);
    };
  }, [visible]);

  return (
    <div className="scroll">
      <h2>Reloj con Hooks</h2>

      {visible && <Reloj hour={hour}/>}

      <nav className="nav">
        <button onClick={() => setVisible(true)} className="btn btn-success">Play</button>
        <button onClick={() => setVisible(false)} className="btn btn-danger">Stop</button>
      </nav>
    </div>
  );
}
