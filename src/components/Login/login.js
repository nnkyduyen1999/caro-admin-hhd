import React, { useState } from "react";
import { useStyles } from "./useStyles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Hidden smDown>
        <Grid item md={7} className={classes.image} />
      </Hidden>
      <Grid className={classes.formContainer} item xs sm md={5}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                error={error}
                helperText={errorMessage}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="string"
                autoFocus
              />
              <TextField
                error={error}
                helperText={errorMessage}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <div className={classes.btnSection}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.signInBtn}
                >
                  Sign In
                </Button>
                <Button
                  // type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.signInBtn}
                >
                  Sign In with Google
                </Button>
                <Button
                  // type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.signInBtn}
                >
                  Sign In with Facebook
                </Button>
              </div>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Login;
