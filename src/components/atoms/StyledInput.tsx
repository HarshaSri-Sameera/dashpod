import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textFieldWrapper: {
    background: theme.palette.tertiary?.light,
    borderRadius: 3,
    "& .MuiFormLabel-root": {
      color: theme.palette.tertiary?.lighter,
    },
  },
  textField: {
    border: 0,
    borderRadius: 3,
    color: "white",
  },
}));

const StyledInput = (props) => {
  const classes = useStyles();
  return (
    <TextField
      InputProps={{ classes: classes.textField }}
      className={classes.textFieldWrapper}
      {...props}
    />
  );
};

export default StyledInput;
