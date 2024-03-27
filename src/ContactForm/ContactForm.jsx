"use client";
import { useReducer } from "react";
import "./ContactForm.css";

// Create initial state

const initialState = {
  fullName: "",
  postcode: "",
  address: "",
  city: "",
  phoneNumber: "",
  email: "",
};

//Create reducer function

function reducer(state, action) {
  switch (action.type) {
    case "updateValue":
      return {
        ...state,
        [action.field]: action.value,
        error: "",
      };
    case "resetValue":
      return initialState;
    case "errorValue":
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

// Create contact form function

function ContactForm() {
  // initialize state

  const [state, dispatch] = useReducer(reducer, initialState);
  //add console log
  // create change function

  function handleChange(e) {
    dispatch({
      type: "updateValue",
      field: e.target.name,
      value: e.target.value,
    });
  }

  // Validate email address
  function validateEmail(email) {
    const emailChar = /\S+@\S+\.\S+/;
    return emailChar.test(String(email).toLowerCase());
  }

  // Validate phone numbers
  function validatePhoneNum(phoneNumber) {
    const numberContent = /^\d{11}$/;
    return numberContent.test(phoneNumber);
  }


  // create submit function

  async function handleSubmit(e) {
    e.preventDefault();
  
    // Validate email
    if (!validateEmail(state.email)) {
      dispatch({
        type: "errorValue",
        error: "Error: Invalid email address.",
      });
      return;
    }
  
    // Validate phone number
    if (!validatePhoneNum(state.phoneNumber)) {
      dispatch({
        type: "errorValue",
        error: "Error: Invalid phone number.",
      });
      return;
    }
  
    // Validate postcode
    const postcodeResponse = await fetch(`https://api.postcodes.io/postcodes/${state.postcode}/validate`);
    const postcodeData = await postcodeResponse.json();
  
    if (!postcodeData.result) {
      dispatch({
        type: "errorValue",
        error: "Error: England, Wale, Scotoland bookings only.",
      });
      return;
    }
  
    for (let field in state) {
      if (state[field] === "" && field !== "error") {
        dispatch({
          type: "errorValue",
          error: "Error all fields are required - some missing.",
        });
        return;
      }
    }
  
    console.log(state);
    dispatch({ type: "resetValue" });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Personal Information</h1>
        <fieldset>
          <ul>
            <li>
              <label htmlFor="fullName">Full Name</label> <br />
              <input type="text" id="fullName" name="fullName" value={state.fullName} onChange={handleChange}></input>
            </li>

            <li>
              <label htmlFor="postcode">Postcode</label>
              <br />
              <input type="text" id="postcode" name="postcode" value={state.postcode} onChange={handleChange}></input>
            </li>

            <li>
              <label htmlFor="address">House/Flat Number and Street Name</label>
              <br />
              <input type="text" id="address" name="address" value={state.address} onChange={handleChange}></input>
            </li>

            <li>
              <label htmlFor="city">City</label>
              <br />
              <input type="text" id="city" name="city" value={state.city} onChange={handleChange}></input>
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
                value={state.phoneNumber}
                onChange={handleChange}
              ></input>
            </li>

            <li>
              <label htmlFor="email">Email Address</label>
              <br />
              <input type="email" id="email" name="email" value={state.email} onChange={handleChange}></input>
            </li>
          </ul>
        </fieldset>
        {state.error && <div className="error">{state.error}</div>}

        <button className="submit-btn" type="submit">
          Request Design Consultation
        </button>
      </form>
    </>
  );
}

export default ContactForm;
