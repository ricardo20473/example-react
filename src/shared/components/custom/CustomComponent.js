import React from "react";
import { useFetch } from "../../hooks/useFetch";

const CustomComponent = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data, isPending, error } = useFetch(url);
  const value = data ? data : [];
  return (
    <div className="custom">
      <h2>Hooks personalizado</h2>

      <h3>Pendiente: {JSON.stringify(isPending)}</h3>
      <h3>Error: {JSON.stringify(error)}</h3>
      <ul data-testid="list">
        {value.map((user, index) => {
          return(<li key={index}>{user.name}</li>)
        })}
      </ul>
    </div>
  );
}

export default CustomComponent;
