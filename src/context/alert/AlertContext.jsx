import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const intialState = {
    isError: false,
  };

  const [state, dispatch] = useReducer(alertReducer, intialState);

  const emptyError = () => {
    dispatch({
      type: "EMPTY_ERROR",
    });
  };

  const removeError = () => {
    dispatch({
      type: "REMOVE_ERROR",
    });
  };

  return (
    <AlertContext.Provider
      value={{ isError: state.isError, emptyError, removeError }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
