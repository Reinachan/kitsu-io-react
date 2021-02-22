import React from 'react';
import styled from 'styled-components';

type MediaTagProps = {
	categories: any;
	className: string;
};

const Media: any = styled.span`
	padding: 5px 10px;
	background-color: #433443;
	margin-left: 7px;
	border-radius: 5px;
	font-weight: 800;
`;

export default function MediaTags(props: MediaTagProps) {
	return <Media className={props.className}>{props.categories.title.en}</Media>;
}
