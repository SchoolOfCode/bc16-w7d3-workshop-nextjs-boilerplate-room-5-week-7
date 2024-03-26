"use client";
import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [newContact, setNewContact] = useState({
    fullName: "",
    postcode: "",
    address: "",
    city: "",
    phoneNumber: "",
    email: "",
  });

  function handleChange(e) {
    // Extracting the name and value from the event target
    const name = e.target.name;
    const value = e.target.value;

    // Updating the newContact state
    setNewContact((prevState) => {
      // Creating a new object by spreading the previous state
      const updatedContact = { ...prevState };
      // Updating the specific property corresponding to the changed input
      updatedContact[name] = value;
      // Returning the updated object to set the state
      return updatedContact;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newContact);
    setNewContact({
      fullName: "",
      postcode: "",
      address: "",
      city: "",
      phoneNumber: "",
      email: "",
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h1>Personal Information</h1>
          <ul>
            <li>
              <label htmlFor="fullName">Full Name</label> <br />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={newContact.fullName}
                onChange={handleChange}
                required
              ></input>
            </li>

            <li>
              <label htmlFor="postcode">Postcode</label>
              <br />
              <input
                type="text"
                id="postcode"
                name="postcode"
                value={newContact.postcode}
                onChange={handleChange}
                required
              ></input>
            </li>

            <li>
              <label htmlFor="address">House/Flat Number and Street Name</label>
              <br />
              <input
                type="text"
                id="address"
                name="address"
                value={newContact.address}
                onChange={handleChange}
                required
              ></input>
            </li>

            <li>
              <label htmlFor="city">City</label>
              <br />
              <input type="text" id="city" name="city" value={newContact.city} onChange={handleChange} required></input>
            </li>
          </ul>
        </fieldset>

        <fieldset>
          <h1>Contact Information</h1>
          <ul>
            <li>
              <label htmlFor="phoneNumber">Phone number</label> <br />
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={newContact.phoneNumber}
                onChange={handleChange}
                required
              ></input>
            </li>

            <li>
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={newContact.email}
                onChange={handleChange}
                required
              ></input>
            </li>
          </ul>
        </fieldset>

        <button type="submit">Request Design Consultation</button>
      </form>
    </>
  );
}

export default ContactForm;
