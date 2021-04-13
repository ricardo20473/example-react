import React from "react";
import { connect } from "react-redux";

const Suplentes = ({ suplentes, eliminarSuplente }) => {
  return (
    <section>
      <h2>Suplentes</h2>

      <div className="suplentes">
        {suplentes.map((j, index) => {
          return (
            <article key={index} className="suplente">
              <div>
                <img src={j.foto} alt={j.nombre} width="100px" />
                <button onClick={() => eliminarSuplente(j)}>X</button>
              </div>
              <p>{j.nombre}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  suplentes: state.suplentes,
});

const mapDispatchToProps = (dispatch) => ({
  eliminarSuplente(jugador){
    dispatch({
      type: "ELIMINAR_SUPLENTE",
      jugador
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
