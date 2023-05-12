import { PropTypes } from "prop-types";
import { Component } from "react";
import { Form, Span, AddButton, Label, Input} from "./ContactForm.styled";

export class ContactForm extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })).isRequired,
        onSubmit: PropTypes.func.isRequired, 
    }

    state = {
        name: '',
        number: '',
    }

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        })        
    }

    handleAddContactSumbit = e => {
        e.preventDefault()
        const { onSubmit, contacts } = this.props;
        
        const isIncludeContactName = contacts.find(({ name }) => name === this.state.name)
        const isIncludeContactNumber = contacts.find(({ number }) => number === this.state.number)
        
        if (isIncludeContactName) {
            alert(`"${this.state.name}" is alredy in contacts`)
        } else if (isIncludeContactNumber) {
            alert(`"${this.state.number}" is alredy in contacts`)
        } else {
            onSubmit(this.state)
            this.setState({name: '', number: '',})                    
        }
}

    render() {
        const { name, number } = this.state;
        return (
            <Form onSubmit={this.handleAddContactSumbit}>
                <Label>
                    <Span>Name</Span>
                    <Input
                    onChange={this.handleChange}
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                </Label>
                <Label>
                    <Span>Number</Span>
                    <Input
                    onChange={this.handleChange}
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </Label>
                <AddButton type="submit">Add contact</AddButton>
            </Form>
        )
    }
}