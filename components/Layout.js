/** @format */
import "../styles/Style.css";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { AppProvider } from "./context/AppContext";

const Layout = (props) => {
	return (
		<AppProvider>
			<div>
				<Head>
					<title>Larawena</title>
					<link rel='stylesheet'
						//href='https://kit.fontawesome.com/96e8bce8d6.js'/>
						href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
					<link
						rel='stylesheet'
						//href='https:/bootswatch.com/4/pulse/bootstrap.min.css'
						href='https://bootswatch.com/4/flatly/bootstrap.min.css'
					/>
				</Head>

				<Header />
				{props.children}
			</div>
		</AppProvider>
	);
};
export default Layout;
