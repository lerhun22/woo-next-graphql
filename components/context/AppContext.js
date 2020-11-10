/** @format */

import React, { useState, useEffect } from "react";

//see what are hooks ? for function component - not for a component - so we don't have to manage didmount etc fonction with that

export const AppContext = React.createContext([{}, () => {}]);

export const AppProvider = (props) => {
	const [cart, setCart] = useState();
	useEffect(() => {
		//test if data is render into the clien side not the server side
		if (process.browser) {
			let cartData = localStorage.getItem("woo-next-cart");
			cartData = null !== cartData ? JSON.parse(cartData) : "";
			setCart(cartData);
		}
	}, []);

	return (
		<AppContext.Provider value={[cart, setCart]}>
			{props.children}
		</AppContext.Provider>
	);
};
