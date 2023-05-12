import { PropTypes } from "prop-types";
import { LabelFilter } from "./Filter.styled";
import { Input } from "components/ContactForm/ContactForm.styled";
import { Span } from "components/ContactForm/ContactForm.styled";

export const Filter = ({ value, changeFilter }) => {
    return (
        <LabelFilter>
            <Span>Find contacts by name</Span>
            <Input type="text" value={value} onChange={changeFilter}/>
        </LabelFilter>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
}