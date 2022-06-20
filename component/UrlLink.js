import React, { useState } from 'react';

export default function UrlLink(props) {
	const [activated, setActivated] = useState(true);

	function onClick () {
		setActivated(false);
	}

	return (
		<div>
			<a href={ activated ? props.data.link : '' }>{ props.data.name }</a>
			<button onClick={onClick}>deactivate</button>
		</div>
	)
}