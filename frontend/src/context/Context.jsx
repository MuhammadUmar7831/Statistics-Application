import React, { createContext, useState } from "react";

const Context = createContext();

const Provider = (props) => {
  const host = "http://localhost:3000";

  return (
    <Context.Provider value={{ host }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, Provider };