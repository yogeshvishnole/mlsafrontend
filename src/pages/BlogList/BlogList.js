import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { MainFeaturedPost, PostCard as FeaturedPost } from '../../components';

const mainFeaturedPost = {
	title: 'Title of a longer featured blog post',
	description:
		"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
	image: 'https://source.unsplash.com/random',
	imgText: 'main image description',
	linkText: 'Continue reading…',
};

const featuredPosts = [
	{
		id: 1,
		title: 'Featured post',
		date: 'Nov 12',
		description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text',
	},
	{
		id: 2,
		title: 'Post title',
		date: 'Nov 11',
		description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text',
	},
	{
		id: 3,
		title: 'Featured post',
		date: 'Nov 12',
		description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text',
	},
	{
		id: 4,
		title: 'Post title',
		date: 'Nov 11',
		description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text',
	},
	{
		id: 5,
		title: 'Featured post',
		date: 'Nov 12',
		description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text',
	},
	{
		id: 6,
		title: 'Post title',
		date: 'Nov 11',
		description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text',
	},
	{
		id: 7,
		title: 'Featured post',
		date: 'Nov 12',
		description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text',
	},
	{
		id: 8,
		title: 'Post title',
		date: 'Nov 11',
		description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text',
	},
	{
		id: 9,
		title: 'Featured post',
		date: 'Nov 12',
		description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text',
	},
	{
		id: 10,
		title: 'Post title',
		date: 'Nov 11',
		description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text',
	},
	{
		id: 11,
		title: 'Featured post',
		date: 'Nov 12',
		description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text',
	},
	{
		id: 12,
		title: 'Post title',
		date: 'Nov 11',
		description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text',
	},
	{
		id: 13,
		title: 'Featured post',
		date: 'Nov 12',
		description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text',
	},
	{
		id: 14,
		title: 'Post title',
		date: 'Nov 11',
		description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text',
	},
];

export const BlogList = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
				<main style={{ margin: '4rem 0rem' }}>
					<MainFeaturedPost post={mainFeaturedPost} />
					<Grid container spacing={4}>
						{featuredPosts.map((post) => (
							<FeaturedPost key={post.title} post={post} />
						))}
					</Grid>
				</main>
			</Container>
		</React.Fragment>
	);
};
