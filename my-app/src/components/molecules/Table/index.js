import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import PrimaryButton from '../../atoms/PrimaryButton/index';
import { Box } from '@material-ui/core'
import PopUpMolecule from "../PopUp";
import PopupData from "../../atoms/PopUpData";
import { saveOrders1, saveOrders2, saveOrders3, table1TotalPrice } from "../../../actions/orderedItems";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({
    root1: {
        margin: '30px 30px 30px 10px',
        padding: '20px 30px',
        height: 180,
        cursor: 'move',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '1px 5px 20px #888888',
        width: 300,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginLeft: 100
    },
    contentContainer: {
        height: "100%",
        display: "flex",
        width: 250,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "start",
        marginLeft: 130
    },
    root: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        alignItems: "start",
        fontFamily: "'Hanalei Fill', cursive",
    },
    icon: {
        height: 100
    }
}));

function Table(props) {
    var array1 = []
    const [array, setArray] = useState([]);
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const [price, setPrice] = useState(0);
    const [open, setOpen] = React.useState(false);
    const [dialogData, setDialogData] = useState({ items: [] });

    const table1 = props.table;
    console.log(table1)
    const style = useStyles();
    const classes = useStyles();

    var shouldChange = false;

    // const orders1 = useSelector(
    //     (state) => state && state.orderedItems && state.orderedItems.savedOrder1
    // )

    // const orders2 = useSelector(
    //     (state) => state && state.orderedItems && state.orderedItems.savedOrder2
    // )

    // const orders3 = useSelector(
    //     (state) => state && state.orderedItems && state.orderedItems.savedOrder3
    // )

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drop(event) {
        console.log("log1")
        const droppedItem = event.dataTransfer.getData("drag-item");
        console.log(droppedItem)
        var vals = droppedItem.split(" Rs-");
        var newarray = [vals[0], vals[1]]
        array1.push(newarray)
        setArray([...array, vals]);
        for (let i = 0; i < array.length; i++) {
            if (array[i].indexOf(vals[0]) > -1) {
                console.log("element already exists")
            }
            else {
                array.push(vals);
            }
        }
        if (!array.length) {
            array.push(vals);
        }
        setDialogData(array);
        if (table1 == "Table1")
            dispatch(saveOrders1(array));
        if (table1 == "Table2")
            dispatch(saveOrders2(array));
        if (table1 == "Table3")
            dispatch(saveOrders3(array));
        setCount(count + 1);
        setPrice(price + parseInt(vals[1]))
    }

    const orders1 = useSelector(
        (state) => state && state.orderedItems && state.orderedItems.savedOrder1
    )

    // let totalPriceofTable1 = 0
    // orders1?.map((order) => totalPriceofTable1 += parseInt(order[1]))
    // setPrice(totalPriceofTable1);

    const orders2 = useSelector(
        (state) => state && state.orderedItems && state.orderedItems.savedOrder2
    )

    const orders3 = useSelector(
        (state) => state && state.orderedItems && state.orderedItems.savedOrder3
    )

    // const cost = useSelector(
    //     (state) => state && state.orderedItems && state.orderedItems.table1Price
    // )

    // console.log("cost", cost)

    const handleClickOpen = () => {
        console.log(array);
        shouldChange = true
        setDialogData(array);
        if (table1 == "Table1")
            dispatch(saveOrders1(array));
        if (table1 == "Table2")
            dispatch(saveOrders2(array));
        if (table1 == "Table3")
            dispatch(saveOrders3(array));
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div id={table1} className={classes.root1} style={{ backgroundImage: `url(${props.image})` }}
            onDragOver={allowDrop} onDrop={drop}>
            <Box className={classes.root} >
                <div> <Box className={classes.contentContainer}>
                    <Box style={{ margin: "5px 20px", color: "brown" }}><strong>{table1}</strong></Box>
                    <Box style={{ margin: "5px 20px", color: "brown" }}><strong>Total Items: {count}</strong></Box>
                    <Box style={{ margin: "5px 20px", color: "brown" }}><strong>Total Bill: {price}</strong></Box>
                    <button style={{ margin: "10px 20px", backgroundColor: "brown", width: "120px", borderRadius: "10px", padding: "10px", fontWeight: "600", color: "white", fontSize: "15px", border: "1px solid brown" }} onClick={handleClickOpen}>View Order</button>
                </Box></div>            <div>
                    {dialogData && dialogData.length &&
                        <>
                            {table1 == "Table1" ? <PopUpMolecule items={orders1} open={open} id={table1} /> : null}
                            {table1 == "Table2" ? <PopUpMolecule items={orders2} open={open} id={table1} /> : null}
                            {table1 == "Table3" ? <PopUpMolecule items={orders3} open={open} id={table1} /> : null}
                        </>
                    }
                </div>
            </Box>
        </div>
    );
}


Table.propTypes = {
    table: PropTypes.string.isRequired,
};

Table.defaultProps = null;

export default Table;