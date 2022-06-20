import {useState} from 'react';
import Link from 'next/link';

export default function Crypto(props){
	const [coinBitcoin, setCoinBitcoin] = useState([]);
	// const [coinEtherium, setCoinEtherium] = useState([]);

	function getCoin(){
		fetch("https://api.coincap.io/v2/assets")
		.then(function(response){
			// console.log(response.json);
			return response.json();
		})
		.then(function(response){
			let name = response.data;
			// console.log(name[0].id);
			setCoinBitcoin(name);
		})
		// .then(function(response){
		// 	let cryptoResponse = response;
		// 	let cryptoName = cryptoResponse[0];
		// 	console.log(cryptoName)
		// 	setCoinBitcoin(cryptoName.priceUsd);
		// })
		}

	return (
		<div>
			<h1>Get Your Crypto Rates</h1>
			<ul>
				{
					coinBitcoin.map(function(item){
						return (
							<li key={item.id}>
								<Link href={"/crypto/" + item.id}>
									<a>{item.id}</a>
								</Link>
							</li>
							)
					})
				}
			</ul>
			<button onClick = {getCoin}>Clike here to get crypto</button>

			{/*<button onClick={getCoin}>bitcoin</button>
			<button onClick={getCoin}>Etherium</button>*/}
			
		</div>
		)
}