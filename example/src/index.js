import React from "react";
import ReactDOM from "react-dom";

import { FancySnackbarProvider } from "../../src/index";
import { useFancySnackbar } from "../../src/index";

const App = () => {
  return (
    <FancySnackbarProvider>
      <Success />
      <Error />
      <Info />
    </FancySnackbarProvider>
  );
};

const Success = () => {
  const { queueFancySnackbar } = useFancySnackbar();

  return (
    <button
      onClick={() =>
        queueFancySnackbar("An example of a success message.", "success")
      }
    >
      Success
    </button>
  );
};

const Error = () => {
  const { queueFancySnackbar } = useFancySnackbar();

  return (
    <button
      onClick={() =>
        queueFancySnackbar("An example of an error message.", "error")
      }
    >
      Error
    </button>
  );
};

const Info = () => {
  const { queueFancySnackbar } = useFancySnackbar();

  return (
    <button
      onClick={() => queueFancySnackbar("An example of an info message.")}
    >
      Info
    </button>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
