import { Component } from "react";
import './App.css';
import shortid from "shortid";
import FormPhonebook from "./Components/PhoneBook"
import ContactItem from "./Components/ContactItem"
import Filter from "./Components/Filter"

class App extends Component {
  state = {
    contacts: [],
    name: '',
    filter:"",
    number:""
    
  }
  addContact=({name, number})=>{
    console.log(this.state)
    let contact={
      name,
      number:number,
      id:shortid.generate(),
    }
    this.setState((preState) => { return{
      contacts:  [contact, ...preState.contacts]}
    });
  
  }
  filterChange=(e)=>{
    this.setState({filter:e.currentTarget.value})
  }
    render() {
   const {name}=this.state
   
  return (
    <div>
      <h1>Phonebook</h1>
    <FormPhonebook value={name} onSubmit={this.addContact}/>
   <ContactItem contacts={this.state.contacts}/>
   <Filter value={this.state.filter} onChange={this.filterChange}/>
  
   </div> 
  )}
}

export default App;
