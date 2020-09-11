import { ADD_CONTACT, DEL_CONTACT, UPD_FILTER } from "./phonebookTypes";
import { v4 as uuidv4 } from "uuid";
const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: {
    contact: { id: uuidv4(), name, number },
  },
});

const deleteContact = id => ({
  type: DEL_CONTACT,
  payload: {
    id,
  },
});

const chahgeFilter = filter => ({
  type: UPD_FILTER,
  payload: {
    filter,
  },
});

export default { addContact, deleteContact, chahgeFilter };
