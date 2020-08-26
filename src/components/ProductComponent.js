import React, { Component } from "react";
import { ProductService } from "../services/ProductService";


export class ProductComponent extends Component {

    productService: ProductService;

    constructor() {
        super();
        this.productService = new ProductService();
        this.state = {product: []};
    }

    async componentDidMount() {
        let res = await this.productService.getAllProducts();
        this.setState({product: JSON.stringify(res)});
    }

    render() {
        return <div>{this.state.product}</div>
    }
}
