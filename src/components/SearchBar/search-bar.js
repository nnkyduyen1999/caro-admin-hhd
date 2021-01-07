import React, {useState} from 'react';
import clsx from 'clsx';
import {Box, Button, Card, CardContent, InputAdornment, makeStyles, SvgIcon, TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        width: '90%'
    },
}));

const SearchBar = ({className, onSearch, ...rest}) => {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter')
            onSearch(value);
    }

    return (
        <div
            className={clsx(classes.root, className)}
            {...rest}
        >
            <Box mt={3}>
                <Card>
                    <CardContent>
                        <Box width={'100%'}>
                            <TextField
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SvgIcon
                                                fontSize="small"
                                                color="action"
                                            >
                                                <SearchIcon/>
                                            </SvgIcon>
                                        </InputAdornment>
                                    )
                                }}
                                placeholder="Search customer"
                                variant="outlined"
                                value={value}
                                onChange={handleChange}
                                onKeyDown={handleEnter}
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
};

export default SearchBar;
