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

  const [newError, setNewError] = useState("");

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

    for (let field in newContact) {
      if (newContact[field] === "") {
        setNewError("Error all fields are required - some missing.") 
        return;
      }
    }

    console.log(newContact);
    setNewContact({
      fullName: "",
      postcode: "",
      address: "",
      city: "",
      phoneNumber: "",
      email: "",
    });

    setNewError("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Personal Information</h1>
        <fieldset>
          <ul>
            <li>
              <label htmlFor="fullName">Full Name</label> <br />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={newContact.fullName}
                onChange={handleChange}
                
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
                
              ></input>
            </li>

            <li>
              <label htmlFor="city">City</label>
              <br />
              <input
                type="text"
                id="city"
                name="city"
                value={newContact.city}
                onChange={handleChange}
                
              ></input>
            </li>
          </ul>
        </fieldset>

        <h1>Contact Information</h1>
        <fieldset>
          <ul>
            <li>
              <label htmlFor="phoneNumber">Phone number</label> <br />
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={newContact.phoneNumber}
                onChange={handleChange}
                
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
                
              ></input>
            </li>
          </ul>
        </fieldset>
        <div className="error">
          {newError}
        </div>

        <button className="submit-btn" type="submit">Request Design Consultation</button>
      </form>
    </>
  );
}

export default ContactForm;
