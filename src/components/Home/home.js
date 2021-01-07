import React from 'react';
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Header/>
            <NavBar/>

        </div>
    );
};

export default Home;
