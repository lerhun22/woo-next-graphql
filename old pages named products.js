/** @format */

import React, { Component } from "react";
const wooConfig = require("./wooConfig");
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

class products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		};
	}

	componentDidMount() {
		const api = new WooCommerceRestApi({
			url: wooConfig.Siteurl,
			consumerKey: wooConfig.consumerKey,
			consumerSecret: wooConfig.consumerSecret,
			wpAPI: true,
			version: "wc/v3",
			queryStringAuth: true,
		});

		// List products
		api
			.get("products", {
				per_page: 10, // 18 products per page
			})
			.then((response) => {
				// Successful request
				this.setState({
					products: response.data,
				});
			})
			.catch((error) => {
				// Invalid request, for 4xx and 5xx statuses
			})
			.finally(() => {
				// Always executed.
			});
	}
	render() {
		return (
			<div>
				{" "}
				<h2>Products</h2>
				<ul>
					{this.state.products.map((product) => (
						<li key={product.id}>
							{product.name} - ${product.regular_price}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default products;
