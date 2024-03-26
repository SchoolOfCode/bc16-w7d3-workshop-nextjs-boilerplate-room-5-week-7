import "./ContactForm.css";


function ContactForm() {

    
        return (
          <>
          <form>
<fieldset>
    
    <h1>Personal Information</h1>
<ul>
    <li>
    <label htmlFor="fullName">Full Name</label> <br/>
    <input type="text" id="fullName" name="fullName" required></input>
    </li>

    <li>
    <label htmlFor="postcode">Postcode</label><br/>
    <input type="text" id="postcode" name="postcode" required></input>
    </li>

    <li>
    <label htmlFor="address">House/Flat Number and Street Name</label><br/>
    <input type="text" id="address" name="address" required></input>
    </li>

    <li>
    <label htmlFor="city">City</label><br/>
    <input type="text" id="city" name="city" required></input>
    </li>
</ul>
</fieldset>



<fieldset>
    
    <h1>Contact Information</h1>
<ul>
    <li>
    <label htmlFor="phoneNumber">Phone number</label> <br/>
    <input type="tel" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" id="phoneNumber" name="phoneNumber"  required></input>
    </li>

    <li>
    <label htmlFor="email">Email Address</label><br/>
    <input type="email" id="email" name="email" required></input>
    </li>
</ul>
    </fieldset>

    <button type="submit">Request Design Consultation</button>

          </form>
          </>
        );
      }
      
      export default ContactForm;