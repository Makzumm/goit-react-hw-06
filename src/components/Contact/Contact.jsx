import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';


function Contact({ contactId }) {

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const contact = contacts.find(contact => contact.id === contactId);

    const deleteExistingContact = () => {
        dispatch(deleteContact(contact.id));
    };

    return (
        <div>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button onClick={deleteExistingContact}>Delete</button>
        </div>
    );
}

export default Contact;