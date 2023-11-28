// ParamContext.js
import React, { createContext, useContext, useState } from "react";

const ParamContext = createContext();

export function useParamContext() {
  return useContext(ParamContext);
}

export function ParamProvider({ children }) {
  const [param, setParam] = useState(null);

  return (
    <ParamContext.Provider value={{ param, setParam }}>
      {children}
    </ParamContext.Provider>
  );
}
