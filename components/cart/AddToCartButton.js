/** @format */

import Link from "next/link";
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { addFirstProduct, updateCart } from "../../functions";

const AddToCartButton = (props) => {
	const { product } = props;

	const [cart, setCart] = useContext(AppContext);

	const [showViewCart, setShowViewCart] = useState(false);


	const handledAddToCartClick = () => {
		if (process.browser) {

			let existingCart = localStorage.getItem("woo-next-cart");

			//
			if (existingCart) {
				existingCart = JSON.parse(existingCart);

				const qtyToBeAdded = 1;

				const updatedCart = updateCart(existingCart, product, qtyToBeAdded);

				setCart(updatedCart);
			} else {
				//if no item in the cart create an empty array and push the items
				//addfirstcart

				const newCart = addFirstProduct(product);
				
				setCart(newCart);
			}

			setShowViewCart(true);
		}
	};

	return (
		<React.Fragment>
			<button onClick={handledAddToCartClick} className='btn btn-secondary'>
				Ajouter au Panier
			</button>
			{ showViewCart ? (
				<Link href="/cart">
					<button className="woo-next-view-cart-btn btn btn-secondary">Voir Panier</button>
				</Link>
			) : ''}
		</React.Fragment>
	);
};

export default AddToCartButton;
