import React, { useState, useEffect } from "react";

export default function ScrollHooks() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log('Fase Init');
  }, []);

  useEffect(() => {
    console.log('Moviendo el scroll');
    const detectScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener('scroll', detectScroll);

    return () => {
      window.removeEventListener('scroll', detectScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    return () => {
      console.log('Fase Destroy');
    };
  });

  return (
    <div className="scroll">
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Scroll Y del Navegador {scrollY}</p>
    </div>
  );
}
