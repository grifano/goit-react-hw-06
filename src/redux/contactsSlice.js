// redux/contactsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import initialContacts from "../initialContacts.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload]; // Ensures state remains an array
      },
      prepare(newContact) {
        return {
          payload: {
            name: newContact.name,
            number: newContact.number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload); // Ensures state remains an array
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
