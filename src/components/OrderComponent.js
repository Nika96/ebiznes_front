import React, { Component } from "react";
import { OrderService } from "../services/OrderService";


export class OrderComponent extends Component {

    orderService: OrderService;

    constructor() {
        super();
        this.orderService = new OrderService();
        this.state = {order: []};
    }

    async componentDidMount() {
        let res = await this.orderService.getAllOrders();
        // let res = await this.orderService.getAddressByID(1)
        this.setState({order: JSON.stringify(res)});
    }

    render() {
        return <div>{this.state.order}</div>
    }
}
