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

  // create submit function

  function handleSubmit(e) {
    e.preventDefault();

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

// ❌ WHERE WE LEFT OFF ❌
// return (
//   <form onSubmit={handleSubmit}>

//     <input type="text" name="fullName" value={state.fullName} onChange={handleChange} />

//     {state.error && <div className="error">{state.error}</div>}

//     <button type="submit">Submit</button>
//   </form>
// );

// const [newError, setNewError] = useState("");

// function handleChange(e) {

//   const name = e.target.name;
//   const value = e.target.value;

//   setNewContact((prevState) => {

//     const updatedContact = { ...prevState };

//     updatedContact[name] = value;

//     return updatedContact;
//   });
// }

// function handleSubmit(e) {
//   e.preventDefault();

//   for (let field in newContact) {
//     if (newContact[field] === "") {
//       setNewError("Error all fields are required - some missing.")
//       return;
//     }
//   }

//   console.log(newContact);
//   setNewContact({
//     fullName: "",
//     postcode: "",
//     address: "",
//     city: "",
//     phoneNumber: "",
//     email: "",
//   });

//   setNewError("");
// }
