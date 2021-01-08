import React, { useEffect, useState } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Page from "../common/Page";
import Profile from "./profileImg";
import ProfileDetails from "./profileDetail";
import CircularProgress from "@material-ui/core/CircularProgress";
import {apiGetUserById} from "../../service/user-sevice";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Account = ({match}) => {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      apiGetUserById(match.params.id).then((res) => {
        if (res.status === 200) {
          setUserInfo(res.data);
          setIsLoading(false);
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Page className={classes.root} title="Account">
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} xs={12}>
                <Profile createTime={userInfo.createTime} avatar={userInfo.avatar}/>
              </Grid>
              <Grid item lg={8} md={6} xs={12}>
                <ProfileDetails userInfo={userInfo} />
              </Grid>
            </Grid>
          </Container>
        </Page>
      )}
    </>
  );
};

export default Account;
