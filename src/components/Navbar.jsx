import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbShoppingCartCode } from "react-icons/tb";

import { useSelector } from "react-redux";
const links = [
	{
		id: 1,
		url: "/",
		text: "Home",
	},
	{
		id: 2,
		url: "/cart",
		text: "Cart",
	},
];

const NavItems = () => {
	return (
		<>
			{links.map((link) => {
				const { id, url, text } = link;
				return (
					<li key={id}>
						<NavLink to={url} className='capitalize m-2'>
							{text}
						</NavLink>
					</li>
				);
			})}
		</>
	);
};

const Navbar = () => {
	const items = useSelector((state) => state.cart);
	return (
		<>
			<nav className='bg-base-200 '>
				<div className='navbar align-element'>
					<div className='navbar-start'>
						<NavLink
							to='/'
							className='hidden lg:flex btn btn-ghost normal-case text-xl items-center'>
							Taks Alphaware
						</NavLink>
						<div className='dropdown'>
							<label tabIndex={0} className='btn btn-ghost lg:hidden'>
								<RxHamburgerMenu />
							</label>
							<ul
								tabIndex={0}
								className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-stone-900 rounded-box '>
								<NavItems />
							</ul>
						</div>
					</div>
					<div className='navbar-center hidden lg:flex'>
						<ul className='menu menu-horizontal'>
							<NavItems />
						</ul>
					</div>
					<div className='navbar-end'>
						<NavLink
							to='/cart'
							className={"btn btn-ghost btn-circle btn-md ml-4"}>
							<div className='indicator'>
								<TbShoppingCartCode className='h-6 w-6' />
								<span className='badge badge-sm badge-info indicator-item'>
									{items.length}
								</span>
							</div>
						</NavLink>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
