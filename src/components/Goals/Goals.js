import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import roots from '../../images/root.svg';

import documentsAnimation from '../../animations/documentsAnimation/data';
import scaleAnimation from '../../animations/scaleAnimation/data.json';

const useStyles = makeStyles((theme) => ({
	textSec: {
		color: '#06006C',
		fontFamily: 'Segoe UI',
	},
	textPrim: {
		color: '#06006C',
		fontFamily: 'Segoe UI',
	},
	textWhite: {
		color: '#000',
		fontFamily: 'Segoe UI',
	},
	container: {
		background: '#fff',
		paddingTop: '4rem',
	},
	heading: {
		maxWidth: '40em',
	},
	arrowContainer: {
		marginTop: '0.5em',
	},
	rowContainer: {
		paddingLeft: '5em',
		paddingRight: '5em',
		[theme.breakpoints.down('sm')]: {
			paddingLeft: '1.5em',
			paddingRight: '1.5em',
		},
	},
	itemContainer: {
		maxWidth: '40em',
	},
}));

const Goals = () => {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

	const documentsOptions = {
		loop: true,
		autoplay: true,
		animationData: documentsAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	const scaleOptions = {
		loop: true,
		autoplay: true,
		animationData: scaleAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<Grid container direction="column" className={classes.container}>
			<Grid
				item
				container
				alignItems={matchesMD ? 'center' : undefined}
				direction={matchesMD ? 'column' : 'row'}
				justify="space-between"
				className={classes.rowContainer}
			>
				<Grid
					item
					container
					className={classes.itemContainer}
					direction={matchesSM ? 'column' : 'row'}
					style={{ marginBottom: matchesMD ? '15em' : 0 }}
					md
				>
					<Grid item container direction="column" md>
						<Grid item>
							<Typography variant="h4" align={matchesSM ? 'center' : undefined} className={classes.textSec}>
								Digital Documents & Data
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								variant="body1"
								paragraph
								align={matchesSM ? 'center' : undefined}
								className={classes.textWhite}
							>
								Reduce Errors. Reduce Waste. Reduce Costs.
							</Typography>
							<Typography
								variant="body1"
								paragraph
								align={matchesSM ? 'center' : undefined}
								className={classes.textWhite}
							>
								Billions are spent annually on the purchasing, printing, and distribution of paper. On top of
								the massive environmental impact this has, it causes harm to your bottom line as well.
							</Typography>
							<Typography
								variant="body1"
								paragraph
								align={matchesSM ? 'center' : undefined}
								className={classes.textWhite}
							>
								By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your
								communication, and help the Earth.
							</Typography>
						</Grid>
					</Grid>
					<Grid item md>
						<Lottie
							options={documentsOptions}
							isStopped={false}
							style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
						/>
					</Grid>
				</Grid>
				<Grid item container className={classes.itemContainer} direction={matchesSM ? 'column' : 'row'} md>
					<Grid item md>
						<Lottie options={scaleOptions} isStopped={false} style={{ maxHeight: 260, maxWidth: 280 }} />
					</Grid>
					<Grid item container direction="column" md>
						<Grid item>
							<Typography variant="h4" align={matchesSM ? 'center' : 'right'} className={classes.textSec}>
								Scale
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								variant="body1"
								align={matchesSM ? 'center' : 'right'}
								paragraph
								className={classes.textWhite}
							>
								Whether you’re a large brand, just getting started, or taking off right now, our application
								architecture ensures pain-free growth and reliability.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				container
				direction="row"
				style={{ marginTop: '5em', marginBottom: '5em' }}
				className={classes.rowContainer}
			>
				<Grid item container direction="column" alignItems="center">
					<Grid item>
						<img
							src={roots}
							alt="tree with roots extending out"
							height={matchesSM ? '300em' : '450em'}
							width={matchesSM ? '300em' : '450em'}
						/>
					</Grid>
					<Grid item className={classes.itemContainer}>
						<Typography variant="h4" align="center" gutterBottom className={classes.textSec}>
							Root-Cause Analysis
						</Typography>
						<Typography variant="body1" align="center" paragraph className={classes.textWhite}>
							Many problems are merely symptoms of larger, underlying issues.
						</Typography>
						<Typography variant="body1" align="center" paragraph className={classes.textWhite}>
							We can help you thoroughly examine all areas of your business to develop a holistic plan for the
							most effective implementation of technology.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Goals;
