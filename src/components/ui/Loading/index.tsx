import React from 'react';
import { ThemedStyledProps } from 'styled-components';
import { LoadingTie, KitsuLoad } from './styles';

interface Props {
	small?: boolean;
}

function Loading({ small }: Props) {
	return (
		<LoadingTie>
			<KitsuLoad />
		</LoadingTie>
	);
}

export default Loading;
