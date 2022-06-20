import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CryptoName(props){
	const [coinPrice, setCoinPrice] = useState(0);
	const router = useRouter();
	const cryptoName = router.query.cryptoName; 

	useEffect(function () {
		if (router.isReady) {
			getCoinPrice();
		}
	}, [router.isReady])


	function getCoinPrice(){
		console.log(cryptoName, this, router);
		fetch(`https://api.coincap.io/v2/assets/${cryptoName}`)
			.then(function(response){
				return response.json();
			})
			.then(function(response){
				let price = response.data;
				console.log(price, response);
				let coinPrice = price.priceUsd;
				setCoinPrice(coinPrice);
				// console.log(coinPrice)
			})
	}

	return (
			<div>
				<h1>{cryptoName} Price is : {coinPrice}</h1>
			</div>
		)
}