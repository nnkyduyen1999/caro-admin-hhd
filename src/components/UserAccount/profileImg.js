import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import moment from "moment";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
    makeStyles,
} from "@material-ui/core";

const user = {
    avatar: "https://i.redd.it/vn48q55ev4i31.jpg",
    jobTitle: "Senior Developer",
};

const useStyles = makeStyles(() => ({
    root: {},
    avatar: {
        height: 100,
        width: 100,
    },
}));

const Profile = ({info, className, ...rest}) => {
    const classes = useStyles();
    const formatTime = new Date(info.createTime);
    return (
        <Card className={clsx(classes.root, className)} {...rest}>
            <CardContent>
                <Box alignItems="center" display="flex" flexDirection="column">
                    <Avatar className={classes.avatar} src={user.avatar}/>
                    <Typography color="textSecondary" variant="body1">
                        {info.username}
                    </Typography>
                    <Typography
                        className={classes.dateText}
                        color="textSecondary"
                        variant="body1"
                    >
                        {formatTime.toUTCString()}
                    </Typography>
                </Box>
            </CardContent>
            <Divider/>
            <CardActions>
                <Button color="primary" fullWidth variant="text">
                    SET AS ADMIN
                </Button>
            </CardActions>
        </Card>
    );
};

Profile.propTypes = {
    className: PropTypes.string,
};

export default Profile;
