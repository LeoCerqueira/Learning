import React, { Component } from 'react';

export default class Panel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {headercolor,bordercolor, headertext, data} = this.props;

		return (
			<div
				className='panel'
				style={{
					width: '500px',
					height: '100px',
                    position: 'relative',
                    border: `1px solid ${bordercolor}` 
				}}
			>
				<div
					className='panel-head'
					style={{
						width: '100%',
						height: '50px',
						background: headercolor
					}}
				>
					{headertext}
				</div>
				<div className='panel-body'>{data}</div>
			</div>
		);
	}
}
