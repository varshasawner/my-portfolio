import React, { useState, useEffect } from 'react';
import Styles from '../styles/form.module.css';
import { Button } from '@mui/material';

export default function Form(props){
	const [formData, setFormData] = useState({});

	function getData(){
		fetch("http://localhost:8000/profile")
			.then(function(response){
				// console.log(response.json());
				return response.json();	
			})
			.then(function(response){
				console.log(response);
				setFormData(response);
			})
	}

	function onChange(e){
		// setFormData({ name: e.target.value});
		setFormData({...formData, [e.target.name]:e.target.value});
		// console.log(formData);
	}

	function onAddressChange(e) {
		setFormData({...formData,
			address: {
				...formData.address,
				[e.target.name]:e.target.value
			}
		})
	}

	useEffect(function(){
		getData();
	}, [])

	function sendData(){
		fetch("http://localhost:8000/profile", {
			method: 'post',
			body: JSON.stringify({
				// ...formData
				name: formData.name,
				age: formData.age,
				...(formData.address)
			}),
			headers: {
				'Content-Type':'application/json'
			}
		})
			.then(function(response){
				return response.json();
			})
			.then(function(response){
				setFormData(response);
			})
	}
	return (
			<form>
				<table cellPadding="10px" cellSpacing="10px" align="center">
				<caption>User Profile Form</caption>
				 <tbody>
					<tr>
						<th><label>Name:</label></th>
						<td>
							<input type="text" name="name" value={formData.name || ""} onChange={onChange}/>
						</td>
					</tr>
					<tr>
						<th><label>Age:</label></th>
						<td>
							<input type="text" name="age" value={formData.age || ""} onChange={onChange} /><br></br>
							<span className={Styles.error}>{formData.error}</span>
						</td>
					</tr>
					<tr>
						<th><label>Address:</label></th>
						<td><input type="text" name="house" onChange={onAddressChange} placeholder="House Number" value={formData.address && formData.address.house || ""}/><br/>
								<input type="text" name="street" onChange={onAddressChange} placeholder="Street" value={formData.address && formData.address.street || ""}/><br/>
								<input type="text" name="city" onChange={onAddressChange} placeholder="City" value={formData.address && formData.address.city || ""}/><br/>
								<input type="text" name="country" onChange={onAddressChange} placeholder="Country" value={formData.address && formData.address.country || ""}/>
						</td>
					</tr>
					<tr>
						<th><Button variant="contained">From Material UI</Button></th>
						<th><input type="button" value="submit" onClick={sendData}/></th>
					</tr>
					</tbody>
				</table>
				</form>
		)
}