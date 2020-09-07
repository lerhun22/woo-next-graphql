/** @format */
import "../styles/Style.css";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
	return (
		<div>
			<Head>
				<title>Larawena</title>
				<link
					rel='stylesheet'
					href='https:/bootswatch.com/4/pulse/bootstrap.min.css'
				></link>
			</Head>

			<Header />
			{props.children}
		</div>
	);
};
export default Layout;
