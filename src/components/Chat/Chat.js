import React from "react";
import {Grid} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ChatItem from "./ChatItem"
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import CircularProgress from "@material-ui/core/CircularProgress";

const messages = [
    {
        senderId: 'ddd',
        senderName: 'tuhao',
        body: 'sssssss'
    },
    {
        senderId: 'ddd',
        senderName: 'tuhao',
        body: 'sssssss'
    },
    {
        senderId: 'ddd',
        senderName: 'tuhao',
        body: 'sssssss'
    },
    {
        senderId: 'ddd',
        senderName: 'thanhhang',
        body: 'sssssss'
    },
    {
        senderId: 'ddd',
        senderName: 'tuhao',
        body: 'sssssss'
    },
    {
        senderId: 'ddd',
        senderName: 'tuhao',
        body: 'sssssss'
    },
    {
        senderId: 'ddd',
        senderName: 'tuhao',
        body: 'sssssss'
    },
    {
        senderId: 'ddd',
        senderName: 'thanhhang',
        body: 'sssssss'
    },
    {
        senderId: 'ddd',
        senderName: 'tuhao',
        body: 'sssssss'
    },
    {
        senderId: 'ddd',
        senderName: 'tuhao',
        body: 'sssssss'
    },
    {
        senderId: 'ddd',
        senderName: 'tuhao',
        body: 'sssssss'
    },
    {
        senderId: 'ddd',
        senderName: 'thanhhang',
        body: 'sssssss'
    },
    {
        senderId: 'ddd',
        senderName: 'tuhao',
        body: 'sssssss'
    },
    {
        senderId: 'ddd',
        senderName: 'tuhao',
        body: 'sssssss'
    },
    {
        senderId: 'ddd',
        senderName: 'tuhao',
        body: 'sssssss'
    },
    {
        senderId: 'ddd',
        senderName: 'thanhhang',
        body: 'sssssss'
    }
]

const Chat = ({messages}) => {
    const classes = useStyles();
    // const [messages, setMessages] = useState(null);

    return (
        // messages ?
            <div className={classes.container}>
                <CssBaseline/>
                    <List className={classes.conversationContainer} id={'bottom'}>
                        {messages.map((message, i) => {
                            const isOwn = message.senderName === 'thanhhang';
                            return <ChatItem key={i} message={message.body} isOwn={isOwn}
                                             senderName={message.senderName}/>
                        })}
                    </List>
            </div>
            // :
            // <div className={classes.process}>
            //     <CircularProgress/>
            // </div>
    );
};

const useStyles = makeStyles(theme => ({
    container: {
        // flex: 1,
        border: "0.5px solid",
        // maxWidth: 360,
        width: '90%'
    },
    conversationContainer: {
        height: 300,
        // width: '100%',
        position: 'relative',
        overflowY: 'auto',
        width: '90%'
    },
}));

export default Chat;
