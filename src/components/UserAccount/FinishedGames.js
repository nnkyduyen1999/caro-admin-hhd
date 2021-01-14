import * as React from "react";
import {DataGrid} from "@material-ui/data-grid";
import {apiGetFinishedGamesById} from "../../service/user-sevice";
import {Grid, makeStyles} from "@material-ui/core";
import List from "@material-ui/core/List";
import ChatItem from "../Chat/ChatItem";
import {useState} from "react";

const columns = [
    {field: "id", headerName: "ID", width: 90},
    {field: "xPlayer", headerName: "Player X", width: 150},
    {field: "oPlayer", headerName: "Player O", width: 150},
    {
        field: "winner",
        headerName: "Winner",
        width: 100,
        align: "center",
    },
];

export default function DataTable({match}) {
    const [listGame, setListGame] = React.useState([]);
    const [messages, setMessages] = useState([])
    const classes = useStyles();
    React.useEffect(() => {
        apiGetFinishedGamesById(match.params.id)
            .then((res) => {
                if (res.status === 200) {
                    setListGame(
                        res.data.map((game, index) => ({
                            id: index,
                            xPlayer: game.xUsername,
                            oPlayer: game.oUsername,
                            winner: game.winner,
                            messageList: game.messageList
                        }))
                    );
                    console.log("list games finished", res.data);
                } else {
                    console.log("Err");
                }
            })
            .catch((err) => {
                console.log("err");
            });
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12} className={classes.container}>
                <List className={classes.conversationContainer} id={'bottom'}>
                    {messages.map((message, i) => {
                        const isOwn = message.senderName === match.params.id;
                        return <ChatItem key={i} message={message.body} isOwn={false}
                                         senderName={message.senderName}/>
                    })}
                </List>
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
                <div style={{height: 400, width: "100%"}}>
                    <DataGrid
                        rows={listGame} columns={columns} pageSize={5}
                        onRowClick={data => {
                            console.log(data.row.messageList)
                            setMessages(data.row.messageList);
                        }}
                    />
                </div>
            </Grid>
        </Grid>

    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        border: "0.5px solid",
        borderColor: 'gray',
        width: '100%',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    conversationContainer: {
        // height: 100,
        // width: '100%',
        position: 'relative',
        overflowY: 'auto',
        width: '100%'
    },
}));
