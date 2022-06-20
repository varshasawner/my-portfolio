import { useState } from 'react';
import Link from 'next/link';

export default function Index(props){
	const [dogName, setDogName] = useState([]);

	function getDogName()
	{
		fetch("https://dog.ceo/api/breeds/list/all")
		.then(function(response){
			// console.log(response.json());
			return response.json();
		})
		.then(function(response){
			return response.message;
		})
		.then(function(response){
			let a = response;
			let b = Object.keys(a);
			setDogName(b);
		})

	}

	return (
		<div>
			<h1>Dog Name List</h1>
			<button onClick={getDogName}>Get Dog Names</button>
			<ul>
				{ dogName.map(function(item){
						return (
							<li key={item}>
								<Link href={"/dog/" + item}>{item}</Link>
							</li>
						)
				}) }
			</ul>

		</div>
	)
}