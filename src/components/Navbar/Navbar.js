import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavItemBtn,
	NavLinks,
	NavBtnLink,
} from './Navbar.elements';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		if (window.scrollY > 80 && window.location.pathname === '/') {
			setNavbar(true);
		} else if (window.location.pathname === '/') {
			setNavbar(false);
		}
	};

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	useEffect(() => {
		if (window.location.pathname !== '/') {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	}, [window.location.pathname]);

	window.addEventListener('resize', showButton);
	window.addEventListener('scroll', changeBackground);

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav background={navbar}>
					<NavbarContainer>
						<NavLogo to="/" onClick={closeMobileMenu}>
							MLSA
						</NavLogo>
						<MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<NavLinks to="/" onClick={closeMobileMenu}>
									Home
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/team" onClick={closeMobileMenu}>
									Team
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/events" onClick={closeMobileMenu}>
									Events
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/gallery" onClick={closeMobileMenu}>
									Gallery
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/blog" onClick={closeMobileMenu}>
									Blogs
								</NavLinks>
							</NavItem>
							<NavItemBtn>
								{button ? (
									<NavBtnLink to="/signin">
										<Button primary>Login</Button>
									</NavBtnLink>
								) : (
									<NavBtnLink to="/signin">
										<Button onClick={closeMobileMenu} fontBig primary>
											Login
										</Button>
									</NavBtnLink>
								)}
							</NavItemBtn>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;
