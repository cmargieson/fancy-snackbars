import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: theme.palette.success.main,
  },
  info: {
    backgroundColor: theme.palette.info.main,
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
  },
  error: {
    backgroundColor: theme.palette.error.main,
  },
}));

const FancySnackbar = ({
  handleClose,
  handleOnExited,
  message,
  open,
  uuid,
  variant,
}) => {
  const classes = useStyles();

  return (
    <Snackbar
      autoHideDuration={6000}
      onClose={() => handleClose()}
      onExited={() => handleOnExited(uuid)}
      open={open}
    >
      <SnackbarContent
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            onClick={() => handleClose()}
          >
            <CloseIcon />
          </IconButton>
        }
        className={classes[variant]}
        message={message}
      />
    </Snackbar>
  );
};

export default FancySnackbar;
