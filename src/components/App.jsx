import { Component } from "react";
import { ContactForm, ContactList, Notification, Filter} from './index'
import { nanoid } from "nanoid";
import { Container, FormTitle, ContnactsTitle } from "./App.styled";

const LS_KEY = 'contact_list';

export class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const contactsFromlocalStorage = JSON.parse(localStorage.getItem(LS_KEY));
    if (contactsFromlocalStorage) {
      this.setState({
      contacts: [...contactsFromlocalStorage],
    });
    }
  }

  componentDidUpdate() {
    const { contacts } = this.state;
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }

  handleSubmit = (data) => {
    const contact = {...data};
    contact.id = nanoid();
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  }

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contacts => contacts.id !== contactId)
    }));
  }

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }

  getFilteredContact = () => {
    const {filter, contacts } = this.state;
    const normailzedContacts = filter.toLowerCase();
    if (contacts || contacts.length === 0) {
      return contacts.filter(({name}) => name.toLowerCase().includes(normailzedContacts))
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const contactsLength = contacts.length;

    const filteredContacts = this.getFilteredContact();

    return (
      <Container>
        <FormTitle>Phonebook</FormTitle>
        <ContactForm onSubmit={this.handleSubmit} contacts={contacts} />
        {contactsLength !== 0 && <Filter value={filter} changeFilter={this.changeFilter} />}
        {contactsLength === 0 ? <Notification message={"This is where your added contacts will be displayed"}/> : <>
          <ContnactsTitle>Contacts</ContnactsTitle>
          <ContactList
            contacts={filteredContacts}
            onRemoveContact={this.removeContact}
          />
        </>}
      </Container>
    )
  }
};
