import React, { Component } from "react";
import { AddressService } from "../services/AddressService";


export class AddressComponent extends Component {

    addressService: AddressService;

    constructor() {
        super();
        this.addressService = new AddressService();
        this.state = {address: []};
    }

    async componentDidMount() {
        // let res = await this.addressService.getAllAddresses();
        let res = await this.addressService.getAddressByID(1)
        this.setState({address: JSON.stringify(res)});
    }

    render() {
        return <div>{this.state.address}</div>
    }
}
