import styled from 'styled-components';
import img from '../../images/team.jpg';

export const HeroSec = styled.section`
	margin-top: -80px;
	color: #fff;
	height: 100vh;
	background: #06006c url(${img}) no-repeat center center/cover;
`;
export const HeroSecOverlay = styled.div`
	height: 100%;
	background-color: rgba(6, 0, 108, 0.8);
`;

export const AbsCenter = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const MiddleTextBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	@media screen and (max-width: 668px) {
		width: 300px;
	}
`;

export const Headup = styled.h1`
	font-size: 2.2rem;

	color: #fff;

	@media screen and (max-width: 992px) {
		font-size: 1.7rem;
	}

	@media screen and (max-width: 668px) {
		font-size: 1.6rem;
	}
`;
export const Belowtext = styled.h3`
	font-size: 1.5rem;

	color: #fff;

	@media screen and (max-width: 992px) {
		font-size: 1rem;
	}

	@media screen and (max-width: 668px) {
		font-size: 0.9rem;
	}
`;
