import React, {useState} from 'react';
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import {Alert} from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';

const ErrorAlert = ({open, value, onClose}) => {
    return (
        <Collapse in={open}>
            <Alert variant="filled" severity="error"
                   style={{margin: 5}}
                   action={onClose &&
                       <IconButton
                           aria-label="close"
                           color="inherit"
                           size="small"
                           onClick={onClose}
                       >
                           <CloseIcon fontSize="inherit"/>
                       </IconButton>
                   }
            >
                {value}
            </Alert>
        </Collapse>
    );
};

export default ErrorAlert;
