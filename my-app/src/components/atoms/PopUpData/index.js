import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, OutlinedInput, TableHead, TableRow } from '@material-ui/core';
import { Delete, PartyModeSharp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { RootState } from "../../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { SpringRollPrice, ChickenBiryaniPrice, DessertPrice } from "../../../constants"

import CancelIcon from '@material-ui/icons/Cancel';
import { saveOrders1, saveOrders2, saveOrders3, table1TotalPrice } from '../../../actions';

const useStyles = makeStyles((theme) => ({
    item: {
        color: 'white',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            marginBottom: theme.spacing(2),
        },
        '& .MuiBadge-root': {
            marginRight: theme.spacing(4),
        },
        color: 'white',
        fontSize: 15
    },
}));
const PopupData = (props) => {
    const classes = useStyles();
    const itemList = props.items || [];
    const [localItemList, setLocalItemList] = useState(itemList);
    let totalPrice = 0;
    const dispatch = useDispatch()
    itemList.map((ele) => {
        totalPrice += parseInt(ele[1])
    })

    const [shouldClose, setClose] = useState(false)
    const orders1 = useSelector(
        (state) => state && state.orderedItems && state.orderedItems.savedOrder1
    )

    const orders2 = useSelector(
        (state) => state && state.orderedItems && state.orderedItems.savedOrder2
    )

    const orders3 = useSelector(
        (state) => state && state.orderedItems && state.orderedItems.savedOrder3
    )

    const cost = useSelector(
        (state) => state && state.orderedItems && state.orderedItems.table1Price
    )

    var sno = 1;

    function incrementOrder(item, id) {
        let itemArray1 = []
        let itemArray2 = []
        let itemArray3 = []
        if (id == "Table1") {
            orders1.map((order, index) => {
                if (order[0] == item[0]) {
                    if (item[0] == "Spring Rolls")
                        var newPrice = parseInt(order[1]) + SpringRollPrice;
                    else if (item[0] == "Chicken Biryani")
                        var newPrice = parseInt(order[1]) + ChickenBiryaniPrice;
                    else if (item[0] == "Dessert")
                        var newPrice = parseInt(order[1]) + DessertPrice;
                    itemArray1.push([order[0], newPrice])
                } else if (order[0] != item[0])
                    itemArray1.push([order[0], order[1]])
            })
            console.log(itemArray1)
            dispatch(saveOrders1(itemArray1))
            // dispatch(table1TotalPrice(parseInt(totalPrice)))
            console.log(cost)
        }
        if (id == "Table2") {
            orders2.map((order, index) => {
                if (order[0] == item[0]) {
                    if (item[0] == "Spring Rolls")
                        var newPrice = parseInt(order[1]) + SpringRollPrice;
                    else if (item[0] == "Chicken Biryani")
                        var newPrice = parseInt(order[1]) + ChickenBiryaniPrice;
                    else if (item[0] == "Dessert")
                        var newPrice = parseInt(order[1]) + DessertPrice;
                    itemArray2.push([order[0], newPrice])
                } else if (order[0] != item[0])
                    itemArray2.push([order[0], order[1]])
            })
            console.log(itemArray2)
            dispatch(saveOrders2(itemArray2))
            dispatch(table1TotalPrice(parseInt(totalPrice)))
        }
        if (id == "Table3") {
            orders3.map((order, index) => {
                if (order[0] == item[0]) {
                    if (item[0] == "Spring Rolls")
                        var newPrice = parseInt(order[1]) + SpringRollPrice;
                    else if (item[0] == "Chicken Biryani")
                        var newPrice = parseInt(order[1]) + ChickenBiryaniPrice;
                    else if (item[0] == "Dessert")
                        var newPrice = parseInt(order[1]) + DessertPrice;
                    itemArray3.push([order[0], newPrice])
                } else if (order[0] != item[0])
                    itemArray3.push([order[0], order[1]])
            })
            console.log(itemArray3)
            dispatch(saveOrders3(itemArray3))
            dispatch(table1TotalPrice(parseInt(totalPrice)))
        }

    }

    function decrementOrder(item, id) {
        let itemArray1 = []
        let itemArray2 = []
        let itemArray3 = []
        if (id == "Table1") {
            orders1.map((order, index) => {
                if (order[0] == item[0]) {
                    if (item[0] == "Spring Rolls")
                        var newPrice = parseInt(order[1]) - SpringRollPrice;
                    else if (item[0] == "Chicken Biryani")
                        var newPrice = parseInt(order[1]) - ChickenBiryaniPrice;
                    else if (item[0] == "Dessert")
                        var newPrice = parseInt(order[1]) - DessertPrice;
                    itemArray1.push([order[0], newPrice])
                } else if (order[0] != item[0])
                    itemArray1.push([order[0], order[1]])
            })
            console.log(itemArray1)
            dispatch(saveOrders1(itemArray1))
        }
        if (id == "Table2") {
            orders2.map((order, index) => {
                if (order[0] == item[0]) {
                    if (item[0] == "Spring Rolls")
                        var newPrice = parseInt(order[1]) - SpringRollPrice;
                    else if (item[0] == "Chicken Biryani")
                        var newPrice = parseInt(order[1]) - ChickenBiryaniPrice;
                    else if (item[0] == "Dessert")
                        var newPrice = parseInt(order[1]) - DessertPrice;
                    itemArray2.push([order[0], newPrice])
                } else if (order[0] != item[0])
                    itemArray2.push([order[0], order[1]])
            })
            console.log(itemArray2)
            dispatch(saveOrders2(itemArray2))
        }
        if (id == "Table3") {
            orders3.map((order, index) => {
                if (order[0] == item[0]) {
                    if (item[0] == "Spring Rolls")
                        var newPrice = parseInt(order[1]) - SpringRollPrice;
                    else if (item[0] == "Chicken Biryani")
                        var newPrice = parseInt(order[1]) - ChickenBiryaniPrice;
                    else if (item[0] == "Dessert")
                        var newPrice = parseInt(order[1]) - DessertPrice;
                    itemArray3.push([order[0], newPrice])
                } else if (order[0] != item[0])
                    itemArray3.push([order[0], order[1]])
            })
            console.log(itemArray3)
            dispatch(saveOrders3(itemArray3))
        }

    }

    function handleDelete(item, id) {
        console.log(id)
        let updatedOrder1 = []
        let updatedOrder2 = []
        let updatedOrder3 = []
        if (id == "Table1") {
            updatedOrder1 = orders1.filter((order) =>
                order[0] !== item[0]
            )
        }
        if (id == "Table2") {
            updatedOrder2 = orders2.filter((order) =>
                order[0] !== item[0]
            )
        }
        if (id == "Table3") {
            updatedOrder3 = orders3.filter((order) =>
                order[0] !== item[0]
            )
        }
        if (id == "Table1")
            dispatch(saveOrders1(updatedOrder1));
        if (id == "Table2")
            dispatch(saveOrders2(updatedOrder2));
        if (id == "Table3")
            dispatch(saveOrders3(updatedOrder3));
    }

    return (
        <>
            {!shouldClose ?
                <div style={{ backgroundColor: "maroon", opacity: 0.8 }}>
                    {props.open ? (
                        <>
                            <TableContainer open={props.open}>
                            <button style={{ color: "black", marginLeft:"400px", height:"27px", padding:"4px", fontSize: "20px", fontWeight:"bold" }} onClick={() => setClose(true)}>X</button>
                                <Table >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.item}>S.No</TableCell>
                                            <TableCell className={classes.item} align="right">Item Name</TableCell>
                                            <TableCell className={classes.item} align="right">Item Price</TableCell>
                                            <TableCell className={classes.item} align="right">Servings</TableCell>
                                            <TableCell className={classes.item} align="right">Delete</TableCell>
                                            {/* <TableCell><CancelIcon onClick={() => setClose(true)}/></TableCell> */}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {itemList.map((item) => (
                                            <TableRow>
                                                <TableCell className={classes.item} align="right">{sno++}</TableCell>
                                                <TableCell className={classes.item} align="right">{item[0]}</TableCell>
                                                <TableCell className={classes.item} align="right">{item[1]}</TableCell>
                                                <TableCell className={classes.item} align="right">
                                                    <ButtonGroup>
                                                        <Button aria-label="reduce">
                                                            <RemoveIcon className={classes.root} fontSize="small" onClick={() => decrementOrder(item, props.id)} />
                                                        </Button>
                                                        <Button aria-label="increase">
                                                            <AddIcon className={classes.root} fontSize="small" onClick={() => incrementOrder(item, props.id)} />
                                                        </Button>
                                                    </ButtonGroup>
                                                    {/* <button>+</> */}
                                                </TableCell>
                                                <TableCell className={classes.item} align="right"><Delete onClick={() => handleDelete(item, props.id)} /></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <div style={{ color: "white", padding:"16px", fontSize: "20px", fontWeight:"bold" }}>Total Bill : {totalPrice}</div>
                            </TableContainer>
                        </>) : null}
                </div>
                : null}
        </>
    )
}

export default PopupData;