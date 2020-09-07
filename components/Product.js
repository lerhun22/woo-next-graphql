/** @format */

import Link from "next/link";

const Product = (props) => {
	//console.warn(props);
	const { product } = props;
	return (
		<div className='card mb-3 mr-4'>
			<h3 className='card-header text-center'>
				{product.name}-{product.id}
			</h3>
			<Link href={`/product?slug=${product.slug}-${product.id}`}>
				<a>
					<img
						style={{
							width: "200px",
							height: "200px",
							objectFit: "cover",
							display: "block",
						}}
						src={product.image.sourceUrl}
						alt='Product image'
					></img>
				</a>
			</Link>

			<div className='card-body text-center'>
				<h6 className='card-subtitle mb-3'>{product.price}</h6>
			</div>
		</div>
	);
};
export default Product;
