import styled from 'styled-components';

export const Wrapper = styled.nav`
	box-sizing: border-box;
	position: fixed;
	right: 20px;
	top: 20px;
	width: 250px;

	display: grid;
	grid-auto-rows: 1fr;
	grid-template-columns: auto 1fr auto;
	grid-template-rows: auto auto;
	align-items: center;
	column-gap: 0.5rem;

	padding: 1em;

	svg {
		grid-row: 1 / span 2;
		grid-column: 1;

		font-size: 1.25em;

		margin: 0.5em;
		margin-left: 1em;
	}

	span {
		margin: 0;
		grid-column: 2;
		justify-self: right;
		font-size: 0.8em;
		color: var(--grayed-out-text);
	}
	h2 {
		margin: 0;
		grid-column: 2;
		justify-self: right;
		font-size: 0.8em;
		font-weight: bold;
		font-size: 1.2em;
		color: var(--primary-text);
	}

	.profile-picture {
		grid-row: 1 / span 2;
		background-color: black;
		grid-column: 3;
		border-radius: 50%;
		width: 2.75em;
		height: 2.75em;
	}

	.blurred {
		background: var(--user-profile-nav);
		display: block;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 20px;
		filter: blur(5px);
	}
`;

export default Wrapper;
