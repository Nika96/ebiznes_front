import React, { Component } from "react";
import { ReviewService } from "../services/ReviewService";


export class ReviewComponent extends Component {

    reviewService: ReviewService;

    constructor() {
        super();
        this.reviewService = new ReviewService();
        this.state = {review: []};
    }

    async componentDidMount() {
        let res = await this.reviewService.getAllReviews();
        // let res = await this.orderService.getAddressByID(1)
        this.setState({review: JSON.stringify(res)});
    }

    render() {
        return <div>{this.state.review}</div>
    }
}
