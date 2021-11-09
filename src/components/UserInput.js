import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
    input: {
      display: "none",
    },
  },
}));

export default function UserInput({ task, setTask, url, setUrl }) {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          value={task}
          onChange={(e) => setTask(e.target.value)}
          id="outlined-basic"
          label="TITLE"
          variant="outlined"
        />
      </form>
      {/* URL Input*/}
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          id="outlined-basic"
          label="URL"
          variant="outlined"
        />
      </form>
    </div>
  );
}
