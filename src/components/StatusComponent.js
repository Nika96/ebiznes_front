import React, { Component } from "react";
import { StatusService } from "../services/StatusService";

export class StatusComponent extends Component {

    statusService: StatusService;

    constructor() {
        super();
        this.statusService = new StatusService();
        this.state = {status: []};
    }

    async componentDidMount() {
        let res = await this.statusService.getAllStatuses();
        // let res = await this.orderService.getAddressByID(1)
        this.setState({status: JSON.stringify(res)});
    }

    render() {
        return <div>{this.state.status}</div>
    }
}
