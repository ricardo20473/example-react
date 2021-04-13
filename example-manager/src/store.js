import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Leanne Graham",
      foto: "https://via.placeholder.com/150/92c952",
    },
    {
      id: 2,
      nombre: "Ervin Howell",
      foto: "https://via.placeholder.com/150/771796",
    },
    {
      id: 3,
      nombre: "Clementine Bauch",
      foto: "https://via.placeholder.com/150/d32776",
    },
    {
      id: 4,
      nombre: "Patricia Lebsack",
      foto: "https://via.placeholder.com/150/b0f7cc",
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  switch (action.type) {
    case "AGREGAR_TITULAR":
      return {
        ...state,
        titulares: state.titulares.concat(action.jugador),
        jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
      };
    case "AGREGAR_SUPLENTE":
      return {
        ...state,
        suplentes: state.suplentes.concat(action.jugador),
        jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
      };
    case "ELIMINAR_TITULAR":
      return {
        ...state,
        titulares: state.titulares.filter((j) => j.id !== action.jugador.id),
        jugadores: state.jugadores.concat(action.jugador),
      };
    case "ELIMINAR_SUPLENTE":
      return {
        ...state,
        suplentes: state.suplentes.filter((j) => j.id !== action.jugador.id),
        jugadores: state.jugadores.concat(action.jugador),
      };
    default:
      break;
  }

  return state;
};

export default createStore(reducerEntrenador);
