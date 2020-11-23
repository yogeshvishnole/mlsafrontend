import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Container } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import { FooterContainer, SocialIconLink, Social1, Social2, Social3 } from './Footer.elements';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	footerText: {
		color: '#000000',
		fontSize: '1.5rem',
		fontFamily: 'Segoe UI',
		marginBottom: '1rem',
	},
	socialIconContainer: {
		width: '20%',
	},
}));

function Footer() {
	const classes = useStyles();
	const theme = useTheme();

	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<IconContext.Provider value={{ color: '#000000' }}>
			<FooterContainer>
				<Container>
					<Grid container direction="column" justify="center" alignItems="center">
						<Grid item>
							<Typography variant="h2" className={classes.footerText}>
								© Acro MLSA 2020
							</Typography>
						</Grid>

						<Grid item container justify="center" alignItems="center" className={classes.socialIconContainer}>
							<Grid item>
								<SocialIconLink href="/" target="_blank" aria-label="Instagram" className={classes.social1}>
									<FaInstagram />
								</SocialIconLink>
							</Grid>
							<Grid item>
								<SocialIconLink href="/" target="_blank" aria-label="Twitter" className={classes.social2}>
									<FaTwitter />
								</SocialIconLink>
							</Grid>
							<Grid item>
								<SocialIconLink href="/" target="_blank" aria-label="Facebook" className={classes.social3}>
									<FaFacebook />
								</SocialIconLink>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</FooterContainer>
		</IconContext.Provider>
	);
}

export default Footer;
