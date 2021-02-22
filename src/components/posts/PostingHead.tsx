import { Profile } from "../../generated/graphql";
import { Link } from 'react-router-dom';
import { format, formatDistanceToNow, formatRelative, subDays } from 'date-fns'
import React from 'react';

type HeadProps = {
	className: string, 
	user: Profile,
	date: Date
};

export default function PostingHead(props: HeadProps) {
	let userMention: string = props.user.slug ?? props.user.id;
	const link = ("/user/" + userMention) ?? "#"

	let postRelativeTime: String = formatDistanceToNow(new Date(props.date), { addSuffix: true })
	let postDate: String = format(new Date(props.date), "do 'of' MMMM yyyy 'at' h'.'m aaaa")

	/* return (
		<a href={link} className={props.className}>
			<img src={props.user.avatarImage?.views[2].url} alt="poster"></img>
			<a href={link}>@{props.user.slug}</a>
			<h2>{props.user.name}</h2>
			<p>{props.date?.toLocaleString()}</p>
		</a>
	); */
	
	return (
		<div className={props.className}>
			{props.user.avatarImage?.views[2].url
			? <>
					<img src={props.user.avatarImage?.views[2].url} alt={props.user.name}></img>
				</>
			: <div className="no-profile-picture" />
			}
			<Link to={link}>@{userMention}</Link>
			<h2>{props.user.name}</h2>
			<div className="post-date">
				<p className="relative-time">{postRelativeTime}</p>
				<span className="precise-date">{postDate}</span>
			</div>
		</div>
	);
}