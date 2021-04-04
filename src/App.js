import { Component } from "react";
import "./App.css";
import shortid from "shortid";
import FormPhonebook from "./Components/PhoneBook";
import ContactItem from "./Components/ContactItem";
import Filter from "./Components/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  addContact = ({ name, number }) => {
    console.log(this.state);
    let contact = {
      name,
      number: number,
      id: shortid.generate(),
    };
    this.setState((preState) => {
      return {
        contacts: [contact, ...preState.contacts],
      };
    });
  };
  filterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteContact=(id)=>{
    console.log("id", id)
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }
  render() {
    const { name, filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const filterNamePhoneBook = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <FormPhonebook value={name} onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.filterChange} />
        <ContactItem  onDeleteContact={this.deleteContact}  contacts={filterNamePhoneBook} />
      </div>
    );
  }
}

export default App;
