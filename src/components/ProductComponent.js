// eslint-disable-next-line
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
        this.setState({product: res});
        console.log("RES ", res);
    }

    deleteProduct(event, id) {
        event.preventDefault();
        this.productService.deleteProduct(id);
        window.location.reload(false);
    }

    refreshTheSite(event) {
        event.preventDefault();
        window.location.reload(false);
    }

    render() {
        let styling = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '10px'
        }

        let buttonStyling = {
            position: 'absolute',
            right: '5px',
            top: '5px'
        }

        let productCard = this.state.product.map( product => (
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src={require('../img/product.png')} />
                <Card.Body>
                    <Button variant="danger" style={buttonStyling} onClick={(event) => this.deleteProduct(event, product.id)}>X</Button>
                    <Card.Title>{ product.productName }</Card.Title>
                    <Card.Subtitle>{ product.productPrice }</Card.Subtitle>
                    <Card.Text>{ product.productDescription }</Card.Text>
                    <Button variant="success" onClick={(event) => this.refreshTheSite(event)}>Add to basket</Button>
                </Card.Body>
            </Card>
        ));

        return (
            <div style={styling}>
                { productCard }
            </div>
        );
    }
}
