import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = props => {
  // Dummy data
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Denise Williams',
        email: 'dwilliams@gmail.com',
        phone: '111-111-1111',
        type: 'member'
      },
      {
        id: 2,
        name: 'Sara Watson',
        email: 'swatson@gmail.com',
        phone: '222-222-2222',
        type: 'guest'
      },
      {
        id: 3,
        name: 'Walter White',
        email: 'dwhite@gmail.com',
        phone: '333-333-3333',
        type: 'guest'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  //  Clear Current Contact

  //  Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}>
      {props.children}
    </ContactContext.Provider>
  )
};

export default ContactState;