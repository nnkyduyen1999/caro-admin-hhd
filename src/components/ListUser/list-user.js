import React, {useEffect, useState} from "react";
import {apiAllUsers, apiSearch} from "../../service/user-sevice";
import {makeStyles} from "@material-ui/core/styles";
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
import SearchBar from "../SearchBar/search-bar";

const columns = [
    {id: "id", label: "ID", minWidth: 170},
    {id: "username", label: "Username", minWidth: 100},
    {
        id: "email",
        label: "Email",
        minWidth: 170,
    },
    {
        id: "trophy",
        label: "Trophy",
        minWidth: 170,
        align: "right",
    },
    {
        id: "status",
        label: "Status",
        minWidth: 170,
    },

];

const useStyles = makeStyles(theme => ({
    root: {
        width: "90%",

    },
    container: {
        maxHeight: 440,
    },
    layoutRoot: {
        // backgroundColor: theme.palette.background.dark,
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
        overflow: 'hidden',

    },
    content: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        alignItems: 'center',

        height: '100%',
        overflow: 'auto',
    }
}));

const ListUser = (props) => {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const mapDataToRow = (data) => {
        return data.map(function (item) {
            const status = [
                !item.isValidate ? "Not validated" : null,
                item.isBlock ? "Blocked" : null,
            ]
                .filter(Boolean)
                .join(", ");
            return {
                id: item._id,
                username: item.username,
                email: item.email,
                trophy: item.trophy,
                status: status,
            };
        });
    }

    useEffect(() => {
        loadAllUser();
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSearch = (keyword) => {
        if(keyword !== '') {
            // console.log("search")
            apiSearch(keyword).then(res => {
                const newRows = mapDataToRow(res.data.users);
                setRows(newRows);
            }).catch((err) => console.log(err));
        } else {
            loadAllUser();
        }
    }

    const loadAllUser = () => {
        apiAllUsers()
            .then((res) => {
                const rows = mapDataToRow(res.data);
                console.log(rows);
                setRows(rows);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className={classes.layoutRoot}>
            <Header/>
            <NavBar/>
            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>
                    <div className={classes.content}>
                        <SearchBar onSearch={handleSearch}/>
                        <Paper className={classes.root}>
                            <TableContainer className={classes.container}>
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
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row) => {
                                                return (
                                                    <TableRow
                                                        hover
                                                        role="checkbox"
                                                        tabIndex={-1}
                                                        key={row.code}
                                                    >
                                                        {columns.map((column) => {
                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell key={column.id} align={column.align}>
                                                                    {column.format && typeof value === "number"
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
                    </div>
                </div>
            </div>
        </div>
    )

};

export default ListUser;
