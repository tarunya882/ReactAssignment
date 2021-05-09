import React from 'react';
import App from '../src/App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from "./store";
// import DenseTable from "./components/orderForm";
// import PopulateTable from "./components/table";
// import Header from "./components/Header/Header";
// import PopulateMenu from "./components/Menu";
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//     main: {
//         marginLeft:1000
//     },
// }));

// function Restaurant() {
//     const classes = useStyles();
//     return (
//         <div>
//             <div>
//                 <Header />
//             </div>
//             <br></br>
//             <br></br>
//             <br></br>
//             <Grid container spacing={0}>
//                 <Grid item xs={1}>
//                 <div>Search Tables</div>
//                     <PopulateTable />
//                     <DenseTable />
//                 </Grid>
//                 <Grid item xs={1}>
//                 <div class="main">Search Menu</div>
//                 <br></br>
//                 <br></br>
//                         <PopulateMenu />

//                 </Grid>
//             </Grid>
//         </div>
//     )
// }


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);  