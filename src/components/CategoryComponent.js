import React, { Component } from "react";
import { CategoryService } from "../services/CategoryService";


export class CategoryComponent extends Component {

    categoryService: CategoryService;

    constructor() {
        super();
        this.categoryService = new CategoryService();
        this.state = {category: []};
    }

    async componentDidMount() {
        // let res = await this.addressService.getAllAddresses();
        let res = await this.categoryService.createCategory("Books", "Lorem ipsum");
        this.setState({category: JSON.stringify(res)});
    }

    render() {
        return <div>{this.state.category}</div>
    }
}
