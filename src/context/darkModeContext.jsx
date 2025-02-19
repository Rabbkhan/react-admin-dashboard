import { createContext, useEffect, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
  sidebarOpen: false,
};


export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  useEffect(()=>{

    localStorage.setItem("darkMode", JSON.stringify(state.darkMode))
  },[state.darkMode])
  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, sidebarOpen: state.sidebarOpen, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

