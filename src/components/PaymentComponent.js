import React, { Component } from "react";
import { PaymentService } from "../services/PaymentService";


export class PaymentComponent extends Component {

    paymentService: PaymentService;

    constructor() {
        super();
        this.paymentService = new PaymentService();
        this.state = {payment: []};
    }

    async componentDidMount() {
        let res = await this.paymentService.getAllPayments();
        // let res = await this.orderService.getAddressByID(1)
        this.setState({payment: JSON.stringify(res)});
    }

    render() {
        return <div>{this.state.payment}</div>
    }
}
