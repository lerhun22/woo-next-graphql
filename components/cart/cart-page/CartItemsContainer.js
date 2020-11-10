import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from "../../context/AppContext";
import { removeItemFromCart } from '../../../functions';
import CartItem from "./CartItem";

const CartItemsContainer = () => {

	// @TODO wil use it in future variations of the project.
	const [cart, setCart] = useContext(AppContext);

	const handleRemoveProductClick = (event, productId) => {	
		const updatedCart = removeItemFromCart(productId)
		setCart(updatedCart);
	};

	const handleClearCartClick = (event) => {
		console.warn("Panier", cart);
		const test1 = localStorage.getItem("woo-next-cart");
		const test2 = JSON.parse(test1);
		console.warn("Test", test2);
		const test3 = test2.products;
		//console.warn("Produits dans le panier : ", test3);
		const test4 = test2.products.length;
		//console.warn("Nombre éléments : ", test4);
		//const test5 = test2.products[0].productId;
		//console.warn("ID 1er élément : ", test5);
		//const test6 = test2.products[1].productId;
		//console.warn("ID 2ième élément : ", test6);

		if (-1 < test4) {
			for (let i = 0; i < test4; i++) {
				const test7 = test2.products[i].productId;
				console.warn("ID ",i, "ième élément : ", test7);
			}
		}
		
		test3.map((item) => {
			console.warn("Nom ", item.name);
			const updatedCart = removeItemFromCart(item.productId)
			setCart(updatedCart);
		});
	}

	return (
		<div className="content-wrap-cart">
			{ cart ? (
				<div className="woo-next-cart-wrapper container">
					<h1 className="woo-next-cart-heading mt-5">Panier</h1>
					<table className="table table-hover">
						<thead>
						<tr className="woo-next-cart-head-container">
							<th className="woo-next-cart-heading-el" scope="col"/>
							<th className="woo-next-cart-heading-el" scope="col"/>
							<th className="woo-next-cart-heading-el" scope="col">Produit</th>
							<th className="woo-next-cart-heading-el" scope="col">Prix Unitaire</th>
							<th className="woo-next-cart-heading-el" scope="col">Quanté</th>
							<th className="woo-next-cart-heading-el" scope="col">Total</th>
						</tr>
						</thead>
						<tbody>
						{ cart.products.length && (
							cart.products.map( item => (
								<CartItem
									key = { item.productId }
									item = {item}
									handleRemoveProductClick = {handleRemoveProductClick}
									setCart = {setCart}
								/>
							) )
						) }
						</tbody>
					</table>

					{/*Clear entire cart*/}
					<div className="clear-cart">
						<button className="btn btn-secondary " >
							<span className="woo-next-cart" onClick={handleClearCartClick}>Vider le panier</span>								
							<i className="fa fa-arrow-alt-right" />
						</button>
						
					</div>

					{/* Display Errors if any */}
					
					{/*Cart Total*/ }
					<div className="row woo-next-cart-total-container mt-5">
						<div className="col-6">
							<h2>Total</h2>
							<table className="table table-hover">
								<tbody>
								<tr className="table-light">
									<td className="woo-next-cart-element-total">A payer</td>
									<td className="woo-next-cart-element-amt">{ ( 'string' !== typeof cart.totalProductsPrice ) ? cart.totalProductsPrice : cart.totalProductsPrice }</td>
								</tr>
								</tbody>
							</table>
							<Link href="/checkout">
								<button className="btn btn-secondary woo-next-large-black-btn">
									<span className="woo-next-cart-checkout-txt">Paiement</span>
									<i className="fas fa-long-arrow-alt-right"/>
								</button>
							</Link>
						</div>
					</div>
				</div>
			) : (
				<div className="container mt-5">
					<h2>Pas d'article dans le panier</h2>
					<Link href="/">
						<button className="btn btn-secondary woo-next-large-black-btn">
							<span className="woo-next-cart-checkout-txt">Ajouter un article</span>
							<i className="fas fa-long-arrow-alt-right"/>
						</button>
					</Link>
				</div>
			) }
		</div>

	);
};

export default CartItemsContainer;
