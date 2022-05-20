import React, { useState } from "react";
import "./AddContact.css";

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [photo, setPhoto] = useState("");

  function handleClick() {
    let newContact = {
      name,
      lastName,
      photo,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setLastName("");
    setPhoto("");
  }
  return (
    <div className="add">
      <h1 className="title">Contact Book</h1>
      <div className="addContact">
        <input
          onChange={(e) => setName(e.target.value)}
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
          type="url"
          placeholder="URL Photo"
          value={photo}
        />
      </div>

      <button className="addContactBtn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default AddContact;
