import React, { Component } from 'react';
import Contact from './Contact';

export default class Contacts extends Component {

state = {
	contacts:  [
			{
			firstName: "Барней",
			lastName: "Стинсовський",
			phone: "+380956319521",
			gender: "male"
	},{
			firstName: "Робін",
			lastName: "Щербатська",
			phone: "+380931460123",
			gender: "female"
	}, {
			firstName: "Анонімний",
			lastName: "Анонімус",
			phone: "+380666666666"
	}, {
			firstName: "Лілія",
			lastName: "Олдровна",
			phone: "+380504691254",
			gender: "female"
	}, {
			firstName: "Маршен",
			lastName: "Еріксонян",
			phone: "+380739432123",
			gender: "male"
	}, {
			firstName: "Теодор",
			lastName: "Мотсбес",
			phone: "+380956319521",
			gender: "male"
	}
	],
	search: "",
	male: 'male',
	female: 'female',
	others: true
}

handleSearchChange = e => {
	const inputValue = e.target.value;
	this.setState({search: inputValue});	
}

displayContacts = () => {
	const contactsArr = this.state.contacts;
	const inputValue = this.state.search;
	
	const filtredByGender = contactsArr.filter((contact) => {
		return	contact.gender === this.state.male ||
		contact.gender === this.state.female ||
		(!contact.gender && this.state.others);
	});

	if (!inputValue) {
		return filtredByGender.map((contact, i) => <Contact props = {contact} key={i}/>);
	}else {
		const filtredContacts = filtredByGender.filter((contact) => {
			return (
				contact.firstName.toLowerCase().includes(inputValue) ||
				contact.phone.includes(inputValue) ||
				contact.lastName.toLowerCase().includes(inputValue)
			);
		});

		return filtredContacts.map((contact, i) => <Contact props = {contact} key = {i}/>);
	}
};

filtredByGenderM = (e) => {this.setState({male: e.target.checked ? e.target.id :""})};
filtredByGenderF = (e) => {this.setState({female: e.target.checked ? e.target.id :""})};
filtredByGenderO = (e) => {this.setState({others: e.target.checked ? e.target.id :""})};

render() {
	return(
		<div>
			<h1>Contacts</h1>
			<div className="check-box-wrapper">
				<div>
					<input 
						checked={this.state.male} 
						type="checkbox" id="male" 
						onChange={this.filtredByGenderM}
					/>
					<label>Male</label>
				</div>
				<div>
					<input 
						checked={this.state.female} 
						type="checkbox" id="female" 
						onChange={this.filtredByGenderF}
					/>
					<label>Female</label>
				</div>
				<div>
					<input 
						checked={this.state.others} 
						type="checkbox" 
						id="others" 
						onChange={this.filtredByGenderO}
					/>
					<label>Others</label>
				</div>
			</div>
			<input 
				type="text" 
				value={this.state.search} 
				onChange={this.handleSearchChange}
			/>
			{this.displayContacts()}

		</div>
	)
}
}
