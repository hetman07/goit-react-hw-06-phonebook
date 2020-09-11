import { combineReducers } from "redux";
import { ADD_CONTACT, DEL_CONTACT, UPD_FILTER } from "./phonebookTypes";

const initialValue = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const itemsReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload.contact];
    case DEL_CONTACT:
      return state.filter(contactId => contactId.id !== payload.id);
    default:
      return state;
  }
};
const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case UPD_FILTER:
      return payload.filter;
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
