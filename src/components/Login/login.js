import React, {useContext, useState} from "react";
import {useStyles} from "./useStyles";
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
import {AuthenticationContext} from '../../provider/authentication-provider'
import ErrorAlert from "../common/error-alert";

const Login = () => {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    // const [errorMessage, setErrorMessage] = useState("");
    const {state, login} = useContext(AuthenticationContext)

    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password);
        console.log(state);

    }

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item md={12}>
                <ErrorAlert open={state.errMessage !== null} value={state.errMessage}/>
            </Grid>
            <Hidden smDown>
                <Grid item md={7} className={classes.image}/>
            </Hidden>
            <Grid className={classes.formContainer} item xs sm md={5}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} onSubmit={handleLogin}>
                            <TextField
                                error={error}
                                // helperText={errorMessage}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="string"
                                type='email'
                                autoFocus
                                onChange={(e) => {
                                    e.preventDefault();
                                    setEmail(e.target.value);
                                }}
                            />
                            <TextField
                                error={error}
                                // helperText={errorMessage}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => {
                                    e.preventDefault();
                                    setPassword(e.target.value);
                                }}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
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

                            </div>

                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
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
