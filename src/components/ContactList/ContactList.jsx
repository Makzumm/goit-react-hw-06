import Contact from "../Contact/Contact";
import { nanoid } from 'nanoid';
import { selectNameFilter } from '../../redux/filtersSlice';
import { selectContacts } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';

function ContactList() {
    const filter = useSelector(selectNameFilter);
    const contacts = useSelector(selectContacts);
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul>
            {filteredContacts.map((contact) => {
                const id = contact.id ? contact.id : nanoid();
                return (
                    <li key={id}>
                        <Contact contactId={contact.id} contactData={contact} />
                    </li>
                );
            })}
        </ul>
    );
}

export default ContactList;