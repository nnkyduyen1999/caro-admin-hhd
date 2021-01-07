import React from 'react';
import clsx from 'clsx';

import {AppBar, Box, Hidden, IconButton, makeStyles, Toolbar, Typography} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';


const useStyles = makeStyles(() => ({
    root: {},
    avatar: {
        width: 60,
        height: 60
    }
}));

const Header = ({className, ...rest}) => {
    const classes = useStyles();

    return (
        <AppBar
            className={clsx(classes.root, className)}
            elevation={0}
            {...rest}
        >
            <Toolbar>
                <Typography variant='h4'>
                    Admin
                </Typography>
                <Box flexGrow={1}/>
                <Hidden mdDown>
                    <IconButton color="inherit">
                        <InputIcon/>
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
