import React, { useState, useEffect } from "react";

const ScrollHooks = () => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // console.log('Fase Init');
  }, []);

  useEffect(() => {
    // console.log('Moviendo el scroll');
    const detectScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener('scroll', detectScroll);

    return () => {
      window.removeEventListener('scroll', detectScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    return () => {
      // console.log('Fase Destroy');
    };
  });

  return (
    <div className="scroll">
      <h2>Scroll - useEffect y el Ciclo de Vida</h2>
      <p>Barra del Navegador {scrollY}</p>
    </div>
  );
}

export default ScrollHooks;
