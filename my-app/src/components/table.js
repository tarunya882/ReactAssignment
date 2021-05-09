import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DenseTable from "./orderForm";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import PrimaryButton from 'components/atoms/PrimaryButton';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '30px 30px 30px 10px',
        padding: '20px 30px',
        height: 230,
        cursor: 'move',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '1px 5px 20px #888888',
        width: 300,
    },
}));

const tableList = ['Table1', 'Table2', 'Table3'];
function Table(props) {
    var array=[]
    const classes = useStyles();
    function dragOver(ev) {
        ev.preventDefault();
    }

    function drop(ev) {
        const droppedItem = ev.dataTransfer.getData("drag-item");
        console.log(droppedItem)
        var vals = droppedItem.split(" Rs-");
        console.log(vals[1]);
        array.push(vals);
        console.log(array)
    }
    const [flag, showForm] = useState(false);
    const tables = props.tableList;
    const listTables = tables.map((table) =>
        <div id={table}>
            <List className={classes.root} component="nav" aria-label="main mailbox folders" key={table} id={table} onDragOver={dragOver} onDrop={drop}>      
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItemText primary={table} />
                        <ListItemText primary="Total Items" />
                        <ListItemText primary="Total Price" />
                        <div><PrimaryButton variant="contained" color="primary" onClick={() => showForm(!flag)}>View Order</PrimaryButton></div>
                    </List>               
            </List> 
        </div>
    );
    return (
        <div>{listTables}</div>
    );
}


export default function PopulateTable() {
    return (
        <div>
            <Table tableList={tableList} />
        </div>
    )
}

