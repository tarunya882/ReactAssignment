import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

class TableList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showForm: false };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        console.log("Button")
        this.setState({ showForm: true });
    }

    renderForm() {
        return (
            <form>
                <h3>Table1|Order Details</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>No of Servings</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </form>
        );
    }

    render() {
        const { showForm } = this.state;
        return (
            <div>
                <div>{this.props.value}</div>
                <button onClick={this.onClick}>View Order</button>
                {showForm && this.renderForm()}
            </div>
        );
    }
}
export default TableList;
