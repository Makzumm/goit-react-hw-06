import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: {
            items: []
        }
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.items.push(action.payload);
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
        },
    },
});

export const selectContacts = state => state.contacts.contacts.items;
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;