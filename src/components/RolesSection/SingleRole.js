import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SingleRoleContainer } from './Roles.elements';

import learn from '../../images/learn.jpg';

const useStyles = makeStyles((theme) => ({
	explainText: {
		marginBottom: '4rem',
	},
	rolesText: {
		fontSize: '2rem',
		fontFamily: 'Ink Free',
		color: '#EDC139',
	},
}));

const SingleRole = () => {
	const classes = useStyles();

	return (
		<SingleRoleContainer>
			<Grid direction="column" alignItems="center">
				<Grid item className={classes.explainText}>
					<Typography className={classes.rolesText}>
						We people wanted to learn from each others experiences
					</Typography>
				</Grid>
				<Grid item container justify="center" alignItems="center">
					<img src={learn} alt="our images" style={{ width: '60%' }} />
				</Grid>
			</Grid>
		</SingleRoleContainer>
	);
};

export default SingleRole;
