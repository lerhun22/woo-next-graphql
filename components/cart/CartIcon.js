  
import { useContext } from 'react';
import { AppContext } from "./../context/AppContext";
import Link from 'next/link';

const CartIcon = () => {

	const [cart] = useContext(AppContext);



	
	let productsCount = '';
	let totalPrice = '';

	if ((cart !== undefined) && (cart !== null)){
		productsCount = (null !== cart && Object.keys(cart).length) ? cart.totalProductsCount : '';
		totalPrice = (null !== cart && Object.keys(cart).length) ? cart.totalProductsPrice : '';

		console.log('Panier', cart);
		console.log('Array Panier', Object.keys(cart));
		console.log('Expression 1', Object.keys(cart).lenght);
		console.log('Expression 2', cart && Object.keys(cart).lenght);
		console.log('Expression 3', (null !== cart && Object.keys(cart).length));
		
	}
	
	return (
		<>
			<Link href="/cart">
				<a>
					<div className="woo-next-cart-wrap">
						{ totalPrice ? <span className="woo-next-cart-price mr-2">{ totalPrice }</span> : '' }
						<span className="woo-next-cart-icon-container">
							<i className="fa fa-shopping-cart woo-next-cart-icon"/>
							{ productsCount ? <span className="woo-next-cart-count">{ productsCount }</span> : '' }
						</span>
					</div>
				</a>
			</Link>
		</>

	)
};

export default CartIcon;