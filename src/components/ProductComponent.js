import React, { Component } from "react";
import { ProductService } from "../services/ProductService";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Baking sheet</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="success">Add to basket</Button>
                </Card.Body>
            </Card>
        );
    }
}
