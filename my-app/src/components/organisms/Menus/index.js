import React from 'react';
import Menu from "../../molecules/Menu/index";
import PropTypes from "prop-types";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));

function MenuList(props) {
    const menus = props.menuList;
    const classes = useStyles();
    // return (
    //     <div className={classes.root}>
    //         {/* <GridList cellHeight={100} cols={3} className={classes.gridList}> */}
    //             {menus.map((menu) => (
    //                 // <GridListTile key={menu.menu} cols={menu.cols || 1}>
    //                     <Box>
    //                         <Menu menu={menu.menu} image={menu.image}></Menu>
    //                         <br></br>
    //                     </Box>
    //                 // </GridListTile>
    //             ))}
    //         {/* </GridList> */}
    //     </div>
    // );
    return (

        menus.map((menu) => <div><Menu menu={menu.menu} image={menu.image}></Menu><br></br></div>)
    );
}


MenuList.propTypes = {
    menuList: PropTypes.string.isRequired,
};

MenuList.defaultProps = [{ menu: "Spring Rolls Rs-200", image: "https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg" }, { menu: "Chicken Biryani Rs-200", image: "https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg" }, { menu: "Plain Rice Rs-100", image: "https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg" }];

export default MenuList;