import { Component } from "react";
import "./App.css";
import shortid from "shortid";
import FormPhonebook from "./Components/PhoneBook";
import ContactItem from "./Components/ContactItem";
import Filter from "./Components/Filter";
import Section from "./Components/Section";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = ({ name, number }) => {
    // console.log("this.state.contacts",this.state.contacts)
    const sameName = this.state.contacts.some((item) => item.name === name);
    console.log("sameName", sameName);

    if (sameName) {
      window.alert(`LocalHost:3000 says ${name} is already in contact`);
      return;
    }
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

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { name, filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const filterNamePhoneBook = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <Section title="Phonebook">
          <FormPhonebook value={name} onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts list">
          <Filter value={filter} onChange={this.filterChange} />
          <ContactItem
            onDeleteContact={this.deleteContact}
            contacts={filterNamePhoneBook}
          />{" "}
        </Section>
      </div>
    );
  }
}

export default App;
