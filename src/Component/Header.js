import React from "react";

const Header = () => {
	return (
		<>
			<div className='header'>
				<a href='#' className='blue'>
					Landkit.
				</a>
				<div className='header_child'>
					<a href='#' className='grey'>
						Landings
					</a>
					<a href='#' className='grey'>
						Pages
					</a>
					<a href='#' className='grey'>
						Amount
					</a>
					<a href='#' className='grey'>
						Documentation
					</a>
				</div>
				<button className='headerButton'>Buy now</button>
			</div>
		</>
	);
};

export default Header;
