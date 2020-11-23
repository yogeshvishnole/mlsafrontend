import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RolesContainer, RolesHead, HeadContainer } from './Roles.elements';
import { Container } from '../../globalStyles';
import SingleRole from './SingleRole';

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

const RolesSection = () => {
	const classes = useStyles();
	return (
		<RolesContainer>
			<Container>
				<HeadContainer>
					<RolesHead>OUR ROLES AND GOALS</RolesHead>
				</HeadContainer>
				<Grid container>
					<Grid item container justify="center" alignItems="center" xs={12} sm={6}>
						<SingleRole />
					</Grid>
					<Grid item container justify="center" alignItems="center" xs={12} sm={6}>
						<SingleRole />
					</Grid>
				</Grid>
			</Container>
		</RolesContainer>
	);
};

export default RolesSection;
