import React from 'react';
import HomeTemplate from '../src/components/template/Home/index';
import { makeStyles } from '@material-ui/core/styles';

const tableListData= [{table:"Table1",image:"https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg"}, {table:"Table2",image:"https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg"}, {table:"Table3",image:"https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg"}];
const menuListData=[{menu:"Spring Rolls Rs-200",image:"https://cdn.loveandlemons.com/wp-content/uploads/2013/10/spring-rolls.jpg"}, {menu:"Chicken Biryani Rs-200",image:"https://content3.jdmagicbox.com/comp/mumbai/i9/022pxx22.xx22.190125122151.n8i9/catalogue/persiana-hyderabadi-biryani-thane-west-thane-hyderabadi-restaurants-nszt2i18q5.jpg"}, {menu:"Dessert Rs-300",image:"https://files.heftycdn.com/wp-content/uploads/2019/04/c7f06b4bce72dbd0b84240982f2166dc-800x457.jpg"}];

const useStyles = makeStyles((theme) => ({
    root12: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
    },
    bg:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize: 'xxx-large',
        backgroundColor: 'maroon',
        color: 'beige',
        opacity: 0.8,
        fontWeight: 800,
    }
}));


export default function App(){
    
    const classes = useStyles();
    return(
        <div>
            <div className={classes.bg}>Welcome To ZeMoSo Restaurant</div>
        <div className={classes.root12} style={{ backgroundImage: `url(https://img5.goodfon.com/wallpaper/nbig/7/3e/spetsii-imbir-rozmarin-perets-paprika-chesnok-cherri-lavrovy.jpg)` }}>
        <HomeTemplate tableList={tableListData} menuList={menuListData}></HomeTemplate>
        </div>
        </div>
    );
}



