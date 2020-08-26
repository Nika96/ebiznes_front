import React, { Component } from "react";
import { CustomerService } from "../services/CustomerService";


export class CustomerComponent extends Component {

    customerService: CustomerService;

    constructor() {
        super();
        this.customerService = new CustomerService();
        this.state = {customer: []};
    }

    async componentDidMount() {
        let res = await this.customerService.getCustomerByID(2)
        this.setState({customer: JSON.stringify(res)});
    }

    render() {
        return <div>{this.state.customer}</div>
    }
}
