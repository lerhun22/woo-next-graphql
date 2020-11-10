/** @format */

import Nav from "./Nav";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";

/** @format */
const Header = () => {
	const [cart, setCart] = useContext(AppContext);

	return (
		<div>
			<Nav />
		</div>
	);
};
export default Header;
