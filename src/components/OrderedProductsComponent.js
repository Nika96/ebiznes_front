import React, { Component } from "react";
import { OrderedProductsService } from "../services/OrderedProductsService";


export class OrderedProductsComponent extends Component {

    orderService: OrderService;

    constructor() {
        super();
        this.orderService = new OrderedProductsService();
        this.state = {order: []};
    }

    async componentDidMount() {
        let res = await this.orderService.getAllOrderedProducts();
        // let res = await this.orderService.getAddressByID(1)
        this.setState({order: JSON.stringify(res)});
    }

    render() {
        return <div>{this.state.order}</div>
    }
}
