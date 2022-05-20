import React, { useState } from "react";
import "./EditContacts.css";

const EditContacts = (props) => {
  let [name, setName] = useState(props.editContact.name);
  let [lastName, setLastName] = useState(props.editContact.lastName);
  let [photo, setPhoto] = useState(props.editContact.photo);

  function handleSaveClick() {
    let contact = { ...props.editContact };
    contact.name = name;
    contact.lastName = lastName;
    contact.photo = photo;
    props.handleSaveEditedContact(contact);
    setName("");
    setLastName("");
    setPhoto("");
  }

  return (
    <div className="edit">
      <div className="editContacts">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          value={name}
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="LastName"
          value={lastName}
        />
        <input
          onChange={(e) => setPhoto(e.target.value)}
          type="text"
          placeholder="URL Photo"
          value={photo}
        />
      </div>

      <button className="editContactsBtn" onClick={handleSaveClick}>
        Save
      </button>
    </div>
  );
};

export default EditContacts;
