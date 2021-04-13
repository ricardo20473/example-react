import React from "react";
import { connect } from "react-redux";
import cancha from "../cancha.svg";

const Titulares = ({titulares, eliminarTitular}) => {
  return (
    <section>
      <h2>Titulares</h2>

      <div className="cancha">
        {
          titulares.map((j, index) => {
            return <article key={index} className="titular">
              <div>
                <img src={j.foto} alt={j.nombre} width="100px" />
                <button onClick={() => eliminarTitular(j)}>X</button>
              </div>
              <p>{j.nombre}</p>
            </article>
          })
        }

        <img src={cancha} alt="cancha"/>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

const mapDispatchToProps = (dispatch) => ({
  eliminarTitular(jugador){
    dispatch({
      type: "ELIMINAR_TITULAR",
      jugador
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
