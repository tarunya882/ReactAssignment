import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '../../atoms/Typography/index'
import { Box, Paper } from '@material-ui/core';
import { findByLabelText } from '@testing-library/dom';

const useStyles = makeStyles((theme) => ({
    item1: {
        cursor: 'move',
        boxShadow: '1px 5px 20px #888888',
        bordeRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'larger',
        fontFamily: 'revert',
        width: 200,
        marginLeft: 550,
        height: 150,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    item2: {
        cursor: 'move',
        boxShadow: '1px 5px 20px #888888',
        bordeRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'larger',
        fontFamily: 'revert',
        width: 200,
        marginLeft: 550,
        height: 45,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: 'white',
       fontFamily: 'system-ui',
        fontSize: 18,
        fontWeight: 'bold'
    },
    item21: {
        fontWeight:1000
    },
    item:{
        marginLeft: 350
    }
}));

function Menu(props) {
    const classes = useStyles();
    const menu = props.menu;
    function startDrag(ev) {
        ev.dataTransfer.setData("drag-item", ev.target.id);
        //ev.dataTransfer.setData("item-data", JSON.stringify(data));
        console.log(ev.target.id)
    }
    return (

        //  <Box className={classes.item1} style={{ backgroundImage: `url(${props.image})`}} draggable onDragStart={startDrag}> 
        //     {/* <Typography className={classes.text} children={props.menu} />  */}
        //     <div className={classes.item2}>
        //         <Typography className={classes.item2} children={props.menu} />
        //     </div>
        //  </Box> 
        //  <div className={classes.item1} style={{ backgroundImage: `url(${props.image})`}}>
        //      <div className={classes.item2}  draggable onDragStart={startDrag}>
        //         <Typography className={classes.item2} children={props.menu} />
        //     </div>
        //  </div>
        <Box id={menu} className={classes.item}>
            <div>
                <img src={props.image} className={classes.item1} alt="No" />
                <Box id={menu} className={classes.item2} draggable onDragStart={startDrag}>
                    <Typography className={classes.item21} children={props.menu} />
                </Box>
            </div>
        </Box>
    );
}


Menu.propTypes = {
    menu: PropTypes.string.isRequired,
};

Menu.defaultProps = null;

export default Menu;
