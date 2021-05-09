import React from 'react';
import Tables from '../../organisms/Tables/index';
import MenuList from '../../organisms/Menus/index';
import {Box, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    bg: {
      //  backgroundPosition: 'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:700
      
    },
    sub2:{
       marginLeft:500 
    }
}));


const HomeTemplate = (props) => {
    // console.log(props.tableList)
    // return (
    //     <div>
       
    //         <Tables tableList={props.tableList} />
    //         <MenuList menuList={props.menuList} />
        
    //     </div>
    // )
    const useStyles = makeStyles((theme) => ({
        main: {
            marginLeft:1000
        },
    }));
    const classes = useStyles();
    return (
        <div>
            {/* <div className={classes.bg}>
                <div>Welcome to ZeMoSo Restaurant</div>
            </div> */}
            <br></br>
            <br></br>
            <br></br>
            <Grid container spacing={0}>
                <Grid item xs={1}>
                
                   <Tables tableList={props.tableList} />
                </Grid>
                <Grid item xs={1}>
              
                <br></br>
                <br></br>
                <MenuList menuList={props.menuList} />
                   
                </Grid>
            </Grid>
        </div>
    )
}

//HomeTemplate.defaultProps = [{table:"Table1",image:"https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg"}, {table:"Table2",image:"https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg"}, {table:"Table3",image:"https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg"}];
export default HomeTemplate;