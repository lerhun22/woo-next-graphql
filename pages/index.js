/** @format */

import Layout from "../components/Layout.js";
import client from "../components/ApolloClient.js";
import Product from "../components/Product.js";
import gql from "graphql-tag";

const PRODUCTS_QUERY = gql`
	{
		products(first: 20) {
			nodes {
				id
				... on SimpleProduct {
					price
				}
				productId
				averageRating
				slug
				shortDescription
				image {
					caption
					srcSet
					sourceUrl
					title
					uri
				}
				name
			}
		}
	}
`;

const Index = (props) => {
	const { products } = props;

	return (
		<Layout>
			<div className='product-container'>
				{products.length
					? products.map((product) => (
							<Product key={product.id} product={product} />
					  ))
					: ""}
			</div>
		</Layout>
	);
};

Index.getInitialProps = async () => {
	const result = await client.query({
		query: PRODUCTS_QUERY,
	});

	return {
		products: result.data.products.nodes,
	};
};
export default Index;
