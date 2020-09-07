/** @format */

import Link from "next/link";

const Nav = () => {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
				<a className='navbar-brand' href='#'>
					Larawena
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarColor01'
					aria-controls='navbarColor01'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarColor01'>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item active'>
							<Link href='/'>
								<a className='nav-link'>Boutique</a>
							</Link>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Catégories
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Mon Compte
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
export default Nav;
