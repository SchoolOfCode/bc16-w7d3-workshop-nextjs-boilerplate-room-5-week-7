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
  errors: {
    fullName: "",
    postcode: "",
    address: "",
    city: "",
    phoneNumber: "",
    email: "",
  },
};

//Create reducer function

function reducer(state, action) {
  switch (action.type) {
    case "updateValue":
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: "",
        },
      };
    case "resetValue":
      return initialState;
    case "errorValue":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error,
        },
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
        field: "email",
        error: "Invalid email address.",
      });
      return;
    }

    // Validate phone number
    if (!validatePhoneNum(state.phoneNumber)) {
      dispatch({
        type: "errorValue",
        field: "phoneNumber",
        error: "Invalid phone number.",
      });
      return;
    }

    // Validate postcode
    const confirmPostcode = await fetch(
      `https://api.postcodes.io/postcodes/${state.postcode}/validate`
    );
    const postcodeData = await confirmPostcode.json();

    if (!postcodeData.result) {
      dispatch({
        type: "errorValue",
        field: "postcode",
        error: "Error: England, Wales, Scotland bookings only.",
      });
      return;
    }

    for (let field in state) {
      if (state[field] === "" && field !== "error") {
        dispatch({
          type: "errorValue",
          field: "errors",
          error: "All fields are required - some missing.",
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
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={state.fullName}
                onChange={handleChange}
                placeholder="Jane Doe"
              ></input>
              {state.errors.fullName && <small>{state.errors.fullName}</small>}
            </li>

            <li>
              <label htmlFor="postcode">Postcode</label>
              <br />
              <input
                type="text"
                id="postcode"
                name="postcode"
                value={state.postcode}
                onChange={handleChange}
                placeholder="AB12 3CD"
              ></input>
              {state.errors.postcode && <small>{state.errors.postcode}</small>}
            </li>

            <li>
              <label htmlFor="address">House/Flat Number and Street Name</label>
              <br />
              <input
                type="text"
                id="address"
                name="address"
                value={state.address}
                onChange={handleChange}
                placeholder="42 Wallaby Way"
              ></input>
              {state.errors.address && <small>{state.errors.address}</small>}
            </li>

            <li>
              <label htmlFor="city">City</label>
              <br />
              <input
                type="text"
                id="city"
                name="city"
                value={state.city}
                onChange={handleChange}
                placeholder="Sydney"
              ></input>
              {state.errors.city && <small>{state.errors.city}</small>}
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
                placeholder="07123456789"
              ></input>
              {state.errors.phoneNumber && (
                <small>{state.errors.phoneNumber}</small>
              )}
            </li>

            <li>
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={state.email}
                onChange={handleChange}
                placeholder="example@email.com"
              ></input>
              {state.errors.email && <small>{state.errors.email}</small>}
            </li>
          </ul>
        </fieldset>
        {state.errors.errors && (
          <div className="error">{state.errors.errors}</div>
        )}

        <button className="submit-btn" type="submit">
          Request Design Consultation
        </button>
      </form>
    </>
  );
}

export default ContactForm;
