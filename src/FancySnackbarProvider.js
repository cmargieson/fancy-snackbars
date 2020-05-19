import React from "react";
import FancySnackbar from "./FancySnackbar";
import FancySnackbarContext from "./FancySnackbarContext";
import uuid from "./utils/uuid";

const FancySnackbarProvider = ({ children }) => {
  // Queue of snacks (includes current snack)
  const [snackQueue, setSnackQueue] = React.useState([]);
  // Current snack, at the front of the snack queue
  const [snack, setSnack] = React.useState({});

  React.useEffect(() => {
    snackQueue.length && setSnack(snackQueue[0]);
  }, [snackQueue]);

  // Add a snack to the queue of snacks
  const queueFancySnackbar = (message, variant) => {
    const snack = {
      message: message,
      open: true,
      uuid: uuid(),
      variant: ["success", "info", "warning", "error"].includes(variant)
        ? variant
        : "info",
    };
    setSnackQueue((snackQueue) => [...snackQueue, snack]);
  };

  // Close the snackbar
  const handleClose = () => {
    setSnack({ ...snack, open: false });
  };

  // Remove the snack from the snack queue after the snackbar is closed
  const handleOnExited = (uuid) => {
    setSnackQueue(snackQueue.filter((snack) => snack.uuid !== uuid));
  };

  return (
    <FancySnackbarContext.Provider value={{ queueFancySnackbar }}>
      {children}
      <FancySnackbar
        handleClose={handleClose}
        handleOnExited={handleOnExited}
        message={snack.message}
        open={snack.open}
        uuid={snack.uuid}
        variant={snack.variant}
      />
    </FancySnackbarContext.Provider>
  );
};

export default FancySnackbarProvider;
