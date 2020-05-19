import React from "react";
import FancySnackbarContext from "./FancySnackbarContext";

const useFancySnackbar = () => {
  return React.useContext(FancySnackbarContext);
};

export default useFancySnackbar;
