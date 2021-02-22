import React from 'react';
import styled from 'styled-components';

type DropdownProps = {
	className: string;
	options: any[];
};

export default function Dropdown(props: DropdownProps) {
	const Dropdown: any = styled.div`
		.dropbtn {
			background-color: #524052;
			color: white;
			padding: 0.7em;
			font-size: 1.2em;
			border: none;
			width: 100%;
			border-radius: 5px;
		}

		/* The container <div> - needed to position the dropdown content */
		.dropdown {
			position: relative;
			display: inline-block;
			width: 100%;
		}

		/* Dropdown Content (Hidden by Default) */
		.dropdown-content {
			width: 100%;
			display: none;
			position: absolute;
			background-color: #f1f1f1;
			min-width: 160px;
			box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
			z-index: 5;
			text-align: center;
		}

		/* Links inside the dropdown */
		.dropdown-content p {
			color: black;
			padding: 12px 16px;
			text-decoration: none;
			display: block;
		}

		/* Change color of dropdown links on hover */
		.dropdown-content p:hover {
			background-color: #ddd;
		}

		/* Show the dropdown menu on hover */
		.dropdown:hover .dropdown-content {
			display: block;
		}

		/* Change the background color of the dropdown button when the dropdown content is shown */
		.dropdown:hover .dropbtn {
			background-color: #3e8e41;
		}
	`;

	return (
		<Dropdown className={props.className}>
			<div className="dropdown">
				<button className="dropbtn">Currently Watching</button>
				<div className="dropdown-content">
					{props.options.map((x: any) => (
						<p>{x}</p>
					))}
				</div>
			</div>
		</Dropdown>
	);
}
