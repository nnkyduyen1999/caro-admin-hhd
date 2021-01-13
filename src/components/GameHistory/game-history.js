import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import {apiAllFinishGames} from "../../service/game-service";
import moment from "moment";
import ChatItem from "../Chat/ChatItem";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";

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
const columns = [
    {id: "id", label: "ID"},
    {id: "xPlayer", label: "X Player"},
    {
        id: "oPlayer",
        label: "O Player",
    },
    {
        id: "result",
        label: "Result",
    },
    {
        id: "createTime",
        label: "Create Time",
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: "98%",
    },
    container: {
        border: "0.5px solid",
        width: '100%',
    },
    conversationContainer: {
        height: 300,
        // width: '100%',
        position: 'relative',
        overflowY: 'auto',
        width: '100%'
    },
    layoutRoot: {
        display: "flex",
        height: "100%",
        overflow: "hidden",
        width: "100%",
    },
    wrapper: {
        display: "flex",
        flex: "1 1 auto",
        overflow: "hidden",
        paddingTop: 64,
        [theme.breakpoints.up("lg")]: {
            paddingLeft: 256,
        },
    },
    contentContainer: {
        display: "flex",
        flex: "1 1 auto",
        overflow: "hidden",
    },
    content: {
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        overflow: "auto",
        margin: theme.spacing(5)
    },
    loading: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

const GameHistory = (props) => {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [isLoading, setIsLoading] = useState(true);
    const [messages, setMessages] = useState([]);

    const mapDataToRow = (data) => {
        return data.map(function (item) {
            return {
                id: item._id,
                xPlayer: item.xPlayerUsername,
                oPlayer: item.oPlayerUsername,
                result: item.winner === 'Draw' ? item.winner : `${item.winner} win`,
                createTime: moment(item.createTime).format("DD/MM/YYYY HH:MM:SS"),
                messages: item.messages
            };
        });
    };

    useEffect(() => {
        loadAllFinishGames();
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const loadAllFinishGames = () => {
        apiAllFinishGames()
            .then((res) => {
                // console.log("aaa", res.data);
                const rows = mapDataToRow(res.data);
                // console.log(rows);
                setRows(rows);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    };

    const loadingAnimation = (
        <div className={classes.loading}>
            <img
                src={process.env.PUBLIC_URL + "/Ripple-1s-200px.svg"}
                alt="loading"
                style={{
                    width: 200,
                    height: 200,
                }}
            />
        </div>
    );

    return (
        <div className={classes.layoutRoot}>
            <CssBaseline/>
            <Header/>
            <NavBar/>
            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>
                    {isLoading ? (
                        loadingAnimation
                    ) : (
                        <div className={classes.content}>
                            <Grid container >
                                <Grid item xs md={8} >
                                    <Paper className={classes.root}>
                                        <TableContainer>
                                            <Table stickyHeader aria-label="sticky table">
                                                <TableHead>
                                                    <TableRow>
                                                        {columns.map((column) => (
                                                            <TableCell
                                                                key={column.id}
                                                                align={column.align}
                                                                style={{minWidth: column.minWidth}}
                                                            >
                                                                {column.label}
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows
                                                        .slice(
                                                            page * rowsPerPage,
                                                            page * rowsPerPage + rowsPerPage
                                                        )
                                                        .map((row) => {
                                                            console.log('row hihi',row)
                                                            return (
                                                                <TableRow
                                                                    hover
                                                                    role="checkbox"
                                                                    tabIndex={-1}
                                                                    key={row.code}
                                                                    onClick={() =>
                                                                      setMessages(row.messages)
                                                                    }
                                                                >
                                                                    {columns.map((column) => {
                                                                        const value = row[column.id];
                                                                        return (
                                                                            <TableCell
                                                                                key={column.id}
                                                                                align={column.align}
                                                                            >
                                                                                {column.format &&
                                                                                typeof value === "number"
                                                                                    ? column.format(value)
                                                                                    : value}
                                                                            </TableCell>
                                                                        );
                                                                    })}
                                                                </TableRow>
                                                            );
                                                        })}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <TablePagination
                                            rowsPerPageOptions={[10, 25, 100]}
                                            component="div"
                                            count={rows.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            onChangePage={handleChangePage}
                                            onChangeRowsPerPage={handleChangeRowsPerPage}
                                        />
                                    </Paper>
                                </Grid>
                                <Grid item xs md={4} className={classes.container}>
                                    <List className={classes.conversationContainer} id={'bottom'}>
                                        {messages.map((message, i) => {
                                            const isOwn = message.senderName === 'thanhhang';
                                            return <ChatItem key={i} message={message.body} isOwn={isOwn}
                                                             senderName={message.senderName}/>
                                        })}
                                    </List>
                                </Grid>
                            </Grid>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GameHistory;
