import styled from 'styled-components';

export const RolesContainer = styled.section`
	padding: 70px 0 100px 0;
	background: #06006c;
`;
export const SingleRoleContainer = styled.section`
	width: 80%;

	background: transparent;
`;

export const HeadContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;
`;

export const RolesHead = styled.h1`
	color: #fff;
	font-size: 3rem;
	font-family: 'Segoe UI';
	@media screen and (max-width: 668px) {
		font-size: 3rem;
	}
	@media screen and (max-width: 500px) {
		font-size: 2.5rem;
	}
`;
