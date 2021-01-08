import React, {useEffect, useState} from "react";
import {Container, Grid, makeStyles} from "@material-ui/core";
import Page from "../common/Page";
import Profile from "./profileImg";
import ProfileDetails from "./profileDetail";
import CircularProgress from "@material-ui/core/CircularProgress";
import {apiBlockUser, apiGetUserById} from "../../service/user-sevice";
import ErrorAlert from "../common/error-alert";
import {Alert} from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";

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
    const [isBlock, setIsBlock] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        apiGetUserById(match.params.id).then((res) => {
            if (res.status === 200) {
                setUserInfo(res.data);
                setIsBlock(res.data.isBlock);
                // console.log("hihi", res.data.isBlock)
                setIsLoading(false);
            } else {
                console.log(res);
            }
        })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    const handleBlockUser = () => {
        apiBlockUser(match.params.id).then(res => {
            if(res.data.isBlock)
                setAlertMessage("Block user successfully!")
            else
                setAlertMessage("Unblock user successfully!")

            setIsBlock(!isBlock);
            setOpenAlert(true);
        }).catch((err) => {
            console.log(err)
        });
    }
    return (
        <>
            {isLoading ? (
                <CircularProgress/>
            ) : (
                <>
                    <Collapse in={openAlert}>
                        <Alert variant="filled" severity="success"
                               style={{margin: 5}}
                               action={
                                   <IconButton
                                       aria-label="close"
                                       color="inherit"
                                       size="small"
                                       onClick={() => setOpenAlert(false)}
                                   >
                                       <CloseIcon fontSize="inherit"/>
                                   </IconButton>
                               }
                        >
                            {alertMessage}
                        </Alert>
                    </Collapse>
                    <Page className={classes.root} title="Account">
                        <Container maxWidth="lg">
                            <Grid container spacing={3}>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Profile createTime={userInfo.createTime} avatar={userInfo.avatar}/>
                                </Grid>
                                <Grid item lg={8} md={6} xs={12}>
                                    <ProfileDetails userInfo={userInfo} isBlock={isBlock} onBlock={handleBlockUser}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </Page>
                </>
            )}
        </>

    );
};

export default Account;
