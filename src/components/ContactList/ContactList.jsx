import { PropTypes } from "prop-types";
import { ContactListItem } from "../index";
import { ContnactsList } from "./ContactList.styled";

export const ContactList = ({ contacts,onRemoveContact}) => {    
        return (
            <ContnactsList>
                {contacts.map(({ name, id, number}) => {
                    return (
                        <ContactListItem
                            key={id}
                            id={id}
                            name={name}
                            tel={number}
                            onRemoveContact={onRemoveContact}
                        />
                )})}
            </ContnactsList>
        )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired),
    onRemoveContact: PropTypes.func.isRequired,
}