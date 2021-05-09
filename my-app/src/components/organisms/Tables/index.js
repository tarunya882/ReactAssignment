import React from 'react';
import Table from "../../molecules/Table/index";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        marginLeft:1000
    },
}));

function Tables(props) {
    const classes = useStyles();
    const tables = props.tableList;
    return (
        <div className={classes.root1}>
           
       { tables.map((table) => <Table key={table.table}table={table.table} image={table.image}></Table>)}
        </div>
    );
}


Tables.propTypes = {
    tableList: PropTypes.string.isRequired,
};

Tables.defaultProps = [{table:"Table1",image:"https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg"}, {table:"Table2",image:"https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg"}, {table:"Table3",image:"https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg"}];

export default Tables;