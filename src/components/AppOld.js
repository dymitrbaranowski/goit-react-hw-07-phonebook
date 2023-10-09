// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';

// export class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = ({ name, number }) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   this.state.contacts.some(i => i.name === contact.name)
  //     ? alert(`${name} is already in contacts`)
  //     : this.setState(({ contacts }) => ({
  //         contacts: [contact, ...contacts],
  //       }));
  // };

  // handleDelete = e => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== e),
  //   }));
  // };

  // getFilteredContacts = () => {
  //   const filterContactsList = this.state.contacts.filter(contact => {
  //     return contact.name
  //       .toLowerCase()
  //       .includes(this.state.filter.toLowerCase());
  //   });

  //   return filterContactsList;
  // };

  // render() {
  //   const { filter } = this.state;

  //   return (
  //     <div
  //       style={{
  //         height: '100vh',
  //         display: 'flex',
  //         flexDirection: 'column',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         fontSize: 20,
  //         color: '#010101',
  //       }}
  //     >
  //       <h1>Phonebook</h1>
  //       <ContactForm handleSubmit={this.handleSubmit} />
  //       <h2> Contacts</h2>
  //       <Filter filter={filter} handleChange={this.handleChange} />
  //       <ContactList
  //         contacts={this.getFilteredContacts()}
  //         handleDelete={this.handleDelete}
  //       />
  //     </div>
  //   );
  // }
// }
