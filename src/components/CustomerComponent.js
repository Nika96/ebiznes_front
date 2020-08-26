import React, { Component } from "react";
import { CustomerService } from "../services/CustomerService";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export class CustomerComponent extends Component {

    customerService: CustomerService;

    constructor() {
        super();
        this.customerService = new CustomerService();
        this.state = {customer: []};
    }

    async componentDidMount() {
        let res = await this.customerService.getCustomerByID(2)
        this.setState({customer: res});
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src='../public/user.png/171x180'/>
                    <Card.Body>
                        <Card.Title>Anna Kowalska</Card.Title>
                        <Card.Text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Card.Text>
                        <Button variant="secondary">Log out ></Button>{'  '}
                        <Button variant="danger">Delete Account</Button>
                    </Card.Body>
                </Card>
            </div>

        );
    }
}
