import { useState}  from 'react';
import Link from 'next/link';
import UrlLink from '../component/UrlLink';

export default function LinkPage(){
	const [name, setname] = useState("");
	const [link, setLink] = useState("");
	const [name_nm, setname_nm] = useState("");
	const [link_nm, setlink_nm] = useState("");
	const [addLink, setAddLink] = useState([]);

	function getName(e){
		let name = e.target.value;
		setname(name);
		console.log(name);
	}

	function getLink(e){
		let link = e.target.value;
		setLink(link);
		console.log(link);
	}

	function getClickableLink(){
		setname_nm(name);
		setlink_nm(link);

		let newSet = []
		for (let link of addLink) {
			newSet.push(link);
		}
		newSet.push({ name: name, link: link });
		setAddLink(newSet);

		setname("");
		setLink("");

	}

	return (
			<div>
				<input type="text" value={name} onChange={ getName }/><br/>
				<input type="text" value = {link} onChange={ getLink }/><br/>
				<button onClick={ getClickableLink }>Get Link</button>

				<ul>
				{
					addLink.map(function(item){
						return (
								<li key="item.link">
									<UrlLink data={item}></UrlLink>
								</li>
						)
					})
				}
				</ul>
			</div>
		)
}
