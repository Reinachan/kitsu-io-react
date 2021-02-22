import styled from 'styled-components';
import { KitsuLoading } from '../../../assets';

export const LoadingTie = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	left: 0;
	width: 100%;
	height: 100px;
	margin-top: 40vh;
`;

export const KitsuLoad = styled(KitsuLoading)`
	/* --size-from: 10px;
  --size-to: 20px; */
	--animation-speed: 500ms;
	/* --translate-y: calc(calc(var(--size-to) - var(--size-from)) / -2); */
	height: 50px;
	will-change: transform;
	animation: loading var(--animation-speed) ease infinite;
	@keyframes loading {
		0% {
			transform: rotate(15deg);
		}
		20% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(-15deg);
		}
		70% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(15deg);
		}
	}
`;
