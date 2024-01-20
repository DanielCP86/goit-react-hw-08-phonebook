import { createSelector } from '@reduxjs/toolkit';
import { selectAllContacts } from '../contacts/selectors';
export const selectFilterText = state => state.filter.text;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilterText],
  (contacts, filterText) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterText)
    );
  }
);
