import React from 'react';
import './Gallery.css';
import { GalleryItem } from '../../components';

export const Gallery = () => {
	return (
		<div className="cards">
			<h1>Check our gallery</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<GalleryItem
							src="https://source.unsplash.com/random"
							text="Here the desc of image we write"
							label="indore"
							path="/services"
						/>
						<GalleryItem
							src="https://source.unsplash.com/random"
							text="Here the desc of image we write"
							label="indore"
							path="/services"
						/>
					</ul>
					<ul className="cards__items">
						<GalleryItem
							src="https://source.unsplash.com/random"
							text="Here the desc of image we write"
							label="indore"
							path="/services"
						/>
						<GalleryItem
							src="https://source.unsplash.com/random"
							text="Here the desc of image we write"
							label="indore"
							path="/products"
						/>
						<GalleryItem
							src="https://source.unsplash.com/random"
							text="Here the desc of image we write"
							label="indore"
							path="/sign-up"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};
