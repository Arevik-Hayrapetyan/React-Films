import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { setItems} from "../../helpers/localStorage";
import { testName, testPassword } from "../../helpers/validation";

import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isValidName, setisValidName] = useState(false);
  const [isValidPassword, setisValidPassword] = useState(false);
  const [isValidLogin, setisValidLogin] = useState(false);
  const [nameError, setnameError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
 

  function handleName(event) {
    setName(event.target.value);
    setItems("currrentUser", event.target.value);
    const isValid = testName(name);

    if (isValid) {
      setisValidName(true);
      setnameError("");
    } else {
      setisValidName(false);
      setnameError("Wrong name");
    }
  }

  function handlePassword(event) {
    setPassword(event.target.value);
    const isValid = testPassword(password);
    if (isValid) {
      setisValidPassword(true);
      setpasswordError("");
    } else {
      setisValidPassword(false);
      setpasswordError("Wrong password");
    }
  }

  function handleLogin(event) {
    const validName = isValidName;
    const ValidPassword = isValidPassword;

    if (validName && ValidPassword) {
      setisValidLogin(!isValidLogin);
      seterrorMessage("Congrats you are Login successfully");
      setItems("isLogin", true);
    } else {
      seterrorMessage("Please try again");
    }
  }


  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>

        <TextField
          onChange={handleName}
          variant="outlined"
          margin="normal"
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoFocus
        />
        <span style={{ color: "red" }}>{nameError}</span>
        <TextField
          onChange={handlePassword}
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <span style={{ color: "red" }}>{passwordError}</span>

        <Button
          onClick={handleLogin}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Log In
        </Button>
        <span style={{ color: "blue" }}>{errorMessage}</span>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}

export default Login;
