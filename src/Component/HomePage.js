import React from "react";
import Header from "./Header";

const HomePage = () => {
	return (
		<>
			<Header />
			<div>
				<div className='main_body'>
					<div className='left'>
						<h1>
							Welcome to <span className='blue'>Landkit.</span>
							<br />
							Develop anything.
						</h1>
						<p>Build a beautiful, modern website</p>
						<div>
							<button className='homeButton'>
								View all pages <span>&#8680;</span>
							</button>
							<button className='homeButton2'>Documentation</button>
						</div>
					</div>
					<div className='right'>
						<img
							src='https://media.istockphoto.com/vectors/business-woman-working-on-laptop-at-office-character-cartoon-vector-vector-id1271366072?k=20&m=1271366072&s=170667a&w=0&h=M4LUd2hADuYQKaxdcVtW6D6LhbAvRbGqwGnHiOTX-5M='
							alt='Pic'
							className='homeImage'
						/>
					</div>
				</div>
			</div>

			<div>
				<div className='main_body2'>
					<div className='home2left'>
						<i class='bi bi-apple'></i>
						<h2>Built for developer</h2>
						<p className='grey'> Landkit is built to make your life easier.</p>
					</div>
					<div className='home2middle'>
						<i class='bi bi-border-style'></i>
						<h2>Built for developer</h2>
						<p className='grey'> Landkit is built to make your life easier.</p>
					</div>
					<div className='home2right'>
						<i class='bi bi-box'></i>
						<h2>Built for developer</h2>
						<p className='grey'> Landkit is built to make your life easier.</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
