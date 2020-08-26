import React, { Component } from "react";
import { OrderedProductsService } from "../services/OrderedProductsService";
import Table from "react-bootstrap/Table";


export class OrderedProductsComponent extends Component {

    orderService: OrderedProductsService;

    constructor() {
        super();
        this.orderService = new OrderedProductsService();
        this.state = {order: []};
    }

    async componentDidMount() {
        let res = await this.orderService.getOrderedProductsByID(1);
        this.setState({order: res});
    }

    render() {
        return (
            <div>
                <h5>Ordered Products</h5>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{ this.state.order.id }</td>
                        <td>{ this.state.order.productID }</td>
                        <td>{ this.state.order.productName }</td>
                        <td>{ this.state.order.quantity }</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}
