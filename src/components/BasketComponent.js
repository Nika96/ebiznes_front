import React, { Component } from "react";
import { BasketService } from "../services/BasketService";


export class BasketComponent extends Component {

    basketService: BasketService;

    constructor() {
        super();
        this.basketService = new BasketService();
        this.state = {basket: []};
    }

    async componentDidMount() {
        let res = await this.basketService.getBasketByID(2);
        this.setState({basket: JSON.stringify(res)});
    }

    render() {
        return <div>{this.state.basket}</div>
    }
}
