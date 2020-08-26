import React, { Component } from "react";
import { CategoryService } from "../services/CategoryService";
import Dropdown from 'react-bootstrap/Dropdown'


export class CategoryComponent extends Component {

    categoryService: CategoryService;

    constructor() {
        super();
        this.categoryService = new CategoryService();
        this.state = {category: []};
    }

    async componentDidMount() {
        let res = await this.categoryService.getAllCategories();
        this.setState({category: res});
    }

    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Product categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Baking</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Cooking</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Cleaning</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}
