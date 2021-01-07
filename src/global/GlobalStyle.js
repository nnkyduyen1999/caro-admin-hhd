import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
    '@global': {
        '*': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
        },
        html: {
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
            height: '100%',
            width: '100%'
        },
        body: {
            backgroundColor: '#212121',
            height: '100%',
            width: '100%'
        },
        a: {
            textDecoration: 'none'
        },
        '#root': {
            height: '100%',
            width: '100%'
        }
    }
}));

const GlobalStyle = () => {
    useStyles();
    return null;
};

export default GlobalStyle;
