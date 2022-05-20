import { useState } from "react";
import "./App.css";
import AddContact from "./Components/AddContact/AddContact";
import ContactList from "./Components/ContactList/ContactList";
import EditContacts from "./Components/EditContacts/EditContacts";

import React from "react";

const App = () => {
  let [contacts, setContacts] = useState([]);
  let [editContact, setEditContact] = useState({});
  let [isEdit, setIsEdit] = useState(false);

  function handleNewContact(newContact) {
    let newContactsArray = [...contacts];
    newContactsArray.push(newContact);

    setContacts(newContactsArray);
  }

  function handleDeleteContact(id) {
    let newContactsArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactsArray);
  }

  function handleEditIndex(index) {
    setIsEdit(true);
    setEditContact(contacts[index]);
  }

  function handleSaveEditedContact(newContact) {
    let newContactsArray = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });

    setContacts(newContactsArray);
    setIsEdit(false);
  }
  return (
    <div className="App">
      <AddContact handleNewContact={handleNewContact} />
      {isEdit ? (
        <EditContacts
          editContact={editContact}
          handleSaveEditedContact={handleSaveEditedContact}
        />
      ) : null}
      <ContactList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
      />
    </div>
  );
};

export default App;
