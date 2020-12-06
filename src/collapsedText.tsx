import React from 'react';

type CollapsedTextProps = {
	children: React.ReactChildren,
	collapsed: boolean
};

/**
 * This component automatically collapses too large text and allows the user to uncollapse
 */
export default class CollapsedText extends React.Component<CollapsedTextProps> {
	_collapsed: boolean = true
	children: React.ReactChildren
	contentDiv: React.RefObject<HTMLDivElement>
	actionField: React.RefObject<HTMLParagraphElement>
	
	static text = {
		a: "Read less",
		b: "Read More"
	}

	constructor(props: CollapsedTextProps) {
		super(props);

		this.children = props.children;
		this._collapsed = props.collapsed;
		this.contentDiv = React.createRef();
		this.actionField = React.createRef();
	}

	get collapsed(): boolean {
		return this._collapsed;
	}

	set collapsed(value: boolean) {
		this._collapsed = value;
		this.updateComponentState();
	}

	clicked() {
		this.collapsed = !this.collapsed;
	}

	componentDidMount() {
		this.updateComponentState();
	}

	componentWillReceiveProps(props: CollapsedTextProps) {
		this.collapsed = props.collapsed;
	}

	updateComponentState() {
		if (!this.actionField.current || !this.contentDiv.current) {
			return;
		}

		this.actionField.current.innerHTML = !this.collapsed ? CollapsedText.text.a : CollapsedText.text.b;
		this.contentDiv.current.style.maxHeight = this.collapsed ? '200px' : 'inherit';
	}

	render() {
		return (
			<div className="sneky-trick">
				<div className="post-content markdown" ref={this.contentDiv}>
					{this.children}
					<p ref={this.actionField} onClick={this.clicked.bind(this)} className="read-more"></p>
				</div>
			</div>
		);
	}
}