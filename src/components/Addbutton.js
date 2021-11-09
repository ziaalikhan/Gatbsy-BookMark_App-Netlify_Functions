import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

// Material Ui Styles
const useStyles = makeStyles((theme) => ({
  root: {
    button: {
      margin: theme.spacing(3),
    },
  },
}));

export default function Addbutton({ addBtn }) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={addBtn}
        className={classes.button}
        endIcon={<SendIcon>Send</SendIcon>}
      >
        Send
      </Button>
    </div>
  );
}
