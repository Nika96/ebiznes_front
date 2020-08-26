import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'

export class HomeComponent extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                    </Tab>
                    <Tab eventKey="ProductCategories" title="Product Categories">
                    </Tab>
                    <Tab eventKey="Customer" title="Customer" disabled>
                    </Tab>
                    <Tab eventKey="Log out" title="Log out" disabled>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}
