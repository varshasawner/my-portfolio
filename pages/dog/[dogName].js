import { useState } from "react";
import {useRouter} from 'next/router';
// import styles from '../../styles/dog.module.css';

// const dogbread = fetch("https://dog.ceo/api/breed/Pitbull/images/random");

export default function Dogname(){
	const [imgUrl, setImgUrl] = useState("");
	const [imgError, setImageError] = useState("");
	const router = useRouter();
	const dogName = router.query.dogName;

	function loadImage () {
		fetch(`https://dog.ceo/api/breed/${dogName}/images/random`)
			.then(function(response) {
				return response.json()
			})
			.then(function (response) {
				// console.log(response);
				setImgUrl(response.message)
			})
	}

	return (
			<div>
				<h1>Dog Page</h1>
				<h2>Dog Name : { dogName } </h2>
				<button onClick={loadImage}>Show me a {dogName} image!</button>
				{imgUrl && <img src={imgUrl} />}
			</div>
		)
}