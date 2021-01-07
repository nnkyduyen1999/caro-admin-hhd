import React from 'react';
import {Link as RouterLink, useLocation} from 'react-router-dom';

import {Avatar, Box, Button, Divider, Drawer, Hidden, List, makeStyles, Typography} from '@material-ui/core';

import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import NavItem from "./NavItem";

const user = {
    avatar: 'https://kimkhavan.files.wordpress.com/2020/01/untitled-2.jpg?w=1024',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith'
};

const items = [
    {
        href: '/list-user',
        icon: PeopleOutlineOutlinedIcon,
        title: 'Users'
    },
    {
        href: '/games',
        icon: SportsEsportsOutlinedIcon,
        title: 'Game History'
    },
    {
        href: '/user-account',
        icon: PersonOutlineOutlinedIcon,
        title: 'Account'
    },
];

const useStyles = makeStyles(() => ({
    desktopDrawer: {
        width: 256,
        top: 64,
        height: 'calc(100% - 64px)'
    },
    avatar: {
        cursor: 'pointer',
        width: 80,
        height: 80
    }
}));

const NavBar = ({}) => {
    const classes = useStyles();

    const content = (
        <Box
            height="100%"
            display="flex"
            flexDirection="column"
        >
            <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                p={2}
            >
                <Avatar
                    className={classes.avatar}
                    component={RouterLink}
                    src={user.avatar}
                    to="/app/account"
                />
                <Typography
                    className={classes.name}
                    color="textPrimary"
                    variant="h5"
                >
                    {user.name}
                </Typography>
                <Typography
                    color="textSecondary"
                    variant="body2"
                >
                    {user.jobTitle}
                </Typography>
            </Box>
            <Divider/>
            <Box p={2}>
                <List>
                    {items.map((item) => (
                        <NavItem
                            href={item.href}
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                        />
                    ))}
                </List>
            </Box>
            <Box flexGrow={1}/>
        </Box>
    );

    return (
        <Hidden mdDown>
            <Drawer
                anchor="left"
                classes={{paper: classes.desktopDrawer}}
                open
                variant="persistent"
            >
                {content}
            </Drawer>
        </Hidden>
    );
};

export default NavBar;
