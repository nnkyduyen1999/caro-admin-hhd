import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(/img/undraw_Followers_re_6k3g.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    paddingLeft: '10px',
    backgroundPositionX: theme.spacing(4),
    // height: '100%',
    // width: '100'
  },
  formContainer: {
    alignSelf: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    marginTop: theme.spacing(1),
  },
  btnSection: {
    margin: theme.spacing(3, 0, 2),
  },
  signInBtn: {
    margin: theme.spacing(1, 0, 1),
  },
}));
