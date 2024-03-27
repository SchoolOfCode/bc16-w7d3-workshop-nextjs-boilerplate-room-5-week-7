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
      case "submission":
        return {
          ...state, 
         isSubmitted: true
        }
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


    console.log(state);
    dispatch({ type: "resetValue" });

    // Requesting...

    await new Promise(resolve => setTimeout(resolve, 2000));

    dispatch({ type: 'DONE' });

     // Succesful submission 

// if (state.isSubmitted) {
//     return <div><p>Thank you for your submission! We will get back to you shortly.</p></div>
//     }

    dispatch({ type: 'submission' })

  }

  return (
    <>

{/* 
❌ Up to line 156*/}
<div>
      {state.isSubmitted ? (
        <div>Thank you for your submission! We will get back to you shortly.</div>
      ) : ( 

  
      <form onSubmit={handleSubmit}>
        <h1>Personal Information</h1>
        <fieldset>
          <ul>
            <li>
              <label htmlFor="fullName">Full Name*</label> <br />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={state.fullName}
                onChange={handleChange}
                placeholder="Jane Doe"
                className={state.errors.email ? "error-input" : ""}
              ></input>
              <br/> 
              {state.errors.fullName && <small className="error">{state.errors.fullName}</small>}
            </li>

            <li>
              <label htmlFor="postcode">Postcode*</label>
              <br />
              <input
                type="text"
                id="postcode"
                name="postcode"
                value={state.postcode}
                onChange={handleChange}
                placeholder="AB12 3CD"
                className={state.errors.email ? "error-input" : ""}
              ></input>
              <br/> 
              {state.errors.postcode && <small className="error">{state.errors.postcode}</small>}
            </li>

            <li>
              <label htmlFor="address">House/Flat Number and Street Name*</label>
              <br />
              <input
                type="text"
                id="address"
                name="address"
                value={state.address}
                onChange={handleChange}
                placeholder="42 Wallaby Way"
                className={state.errors.email ? "error-input" : ""}
              ></input>
              <br/> 
              {state.errors.address && <small className="error">{state.errors.address}</small>}
            </li>

            <li>
              <label htmlFor="city">City*</label>
              <br />
              <input
                type="text"
                id="city"
                name="city"
                value={state.city}
                onChange={handleChange}
                placeholder="Sydney"
                className={state.errors.email ? "error-input" : ""}
              ></input>
              <br/> 
              {state.errors.city && <small className="error">{state.errors.city}</small>}
            </li>
          </ul>
        </fieldset>

        <h1>Contact Information</h1>
        <fieldset>
          <ul>
            <li>
              <label htmlFor="phoneNumber">Phone number*</label> <br />
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={state.phoneNumber}
                onChange={handleChange}
                placeholder="07123456789"
                className={state.errors.email ? "error-input" : ""}
              ></input>
              <br/> 
              {state.errors.phoneNumber && (
                <small className="error">{state.errors.phoneNumber}</small>
              )}
            </li>

            <li>
              <label htmlFor="email">Email Address*</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={state.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className={state.errors.email ? "error-input" : ""}
              ></input>
              <br/> 
              {state.errors.email && <small className="error">{state.errors.email}</small>}
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

)}
</div>
{/* ❌ from line 276 */}
    </>
  );
}

export default ContactForm;
