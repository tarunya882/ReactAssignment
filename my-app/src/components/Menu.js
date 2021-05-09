import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
    item1: {
        //min-width: 50%;
        cursor: 'move',
        boxShadow: '1px 5px 20px #888888',
        bordeRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'larger',
        fontFamily: 'revert',
        width: 700,
        marginLeft: 550,
        height:100
    },
}));

function Menu(props) {
    const classes = useStyles();
    function startDrag(ev) {
        ev.dataTransfer.setData("drag-item", ev.target.id);
        console.log(ev.target.id)
    }

    const items = props.menuList;
    const listItems = items.map((item) =>
        <div id={item} id={item} draggable onDragStart={startDrag}>
            <List component="nav" aria-label="main mailbox folders" key={item} id={item}>
                <div className={classes.item1}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItemText primary={item} />
                    </List>
                </div>
            </List>
        </div>
    );
    return (
        <div>{listItems}</div>
    );
}
const menuList = ['Spring Rolls Rs-200', 'Chicken Biryani Rs-200', 'Plain Rice Rs-100','Finger Chicken Rs-250'];
export default function PopulateMenu() {
    return (
        <div>
            <Menu menuList={menuList} />
        </div>
    )
}

