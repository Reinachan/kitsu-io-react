import { Profile } from "./generated/graphql";
import { Link } from 'react-router-dom';
import React from 'react';

type HeadProps = {
	className: string, 
	user: Profile,
	date: Date
};

export default function PostingHead(props: HeadProps) {
	const link = ("/user/" + props.user.slug) ?? "#"

	/* return (
		<a href={link} className={props.className}>
			<img src={props.user.avatarImage?.views[2].url} alt="poster"></img>
			<a href={link}>@{props.user.slug}</a>
			<h2>{props.user.name}</h2>
			<p>{props.date?.toLocaleString()}</p>
		</a>
	); */
	
	return (
		<a href={link} className={props.className}>
			<img src={props.user.avatarImage?.views[2].url} alt="poster"></img>
			<Link to={link}>@{props.user.slug}</Link>
			<h2>{props.user.name}</h2>
			<p>{props.date?.toLocaleString()}</p>
		</a>
	);
}