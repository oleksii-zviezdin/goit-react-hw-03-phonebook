import { PropTypes } from "prop-types";
import { ContactItem, RemoveButton } from "./ContactListItem.styled";

export const ContactListItem = ({ name, id, onRemoveContact, tel }) => {
    return (
        <ContactItem>
            <p>{name}: <span>{tel}</span></p>
            <RemoveButton type="button" onClick={() => onRemoveContact(id)}>Revome contact</RemoveButton>
        </ContactItem>
    )
}

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    onRemoveContact: PropTypes.func.isRequired,
}