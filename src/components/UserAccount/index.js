import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import NavBar from '../NavBar/NavBar';
import TopBar from '../Header/Header';
import Profile from "./userAccount";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const DashboardLayout = ({match}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar/>
      <NavBar/>
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Profile match={match}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
