/** @format */

import Layout from "./components/Layout";
import Link from "next/link";
import { withRouter } from "next/router";
import client from "./components/ApolloClient";
import gql from "graphql-tag";

const Product = withRouter((props) => {
	//console.warn(props);

	const { product } = props;

	return (
		<Layout>
			{product ? (
				<div>
					<div className='card bg-light mb3 p-5'>
						<div className='card-header'>Détail du produit</div>
						<div className='card-body'>
							<h4 className='card-title'>{product.name}</h4>
							<img
								src={product.image.sourceUrl}
								alt='Product Image'
								width='200px'
								srcSet={product.image.srcSet}
							/>

							<p className='card-text'>
								{product.shortDescription.replace(/<\/?[^>]+(>|$)/g, "")}
							</p>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</Layout>
	);
});

Product.getInitialProps = async function (context) {
	let {
		query: { slug },
	} = context;

	const id = slug ? slug.split("-").pop() : context.query.id;

	const PRODUCT_QUERY = gql`
		query($id: ID!) {
			product(id: $id) {
				name
				id
				shortDescription
				image {
					caption
					srcSet
					sourceUrl
					title
					uri
				}
				... on SimpleProduct {
					price
				}
			}
		}
	`;

	const result = await client.query({
		query: PRODUCT_QUERY,
		fetchPolicy: "network-only",
		variables: { id },
	});

	return {
		product: result.data.product,
	};
};

export default Product;
