import "./NewContactForm.css";
import { useState } from "react";

const NewContactForm = (props) => {
  const setContacts = props.setContacts;
  const [contactDetails, setContactDetails] = useState({
    firstName: "",
    lastName: "",
    description: "",
    emailAddress: "",
  });

  // const [contact, setContacts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setContacts((previousState) => {
      return [...previousState, contactDetails];
    });
    console.log(contact);
  };

  const handleChange = (event) => {
    const field = event.target.name;
    const inputValue = event.target.value;
    setContactDetails((previousState) => {
      return { ...previousState, [field]: inputValue };
    });
  };
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [description, setDescription] = useState("");
  // const [emailAddress, setEmailAddress] = useState("");

  console.log(contactDetails);
  return (
    <div className="contact-form">
      <h1>Add New Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter first name"
            value={contactDetails.firstName}
            onChange={handleChange}
            name="firstName"
          />
          <input
            type="text"
            placeholder="Enter last name"
            value={contactDetails.lastName}
            onChange={handleChange}
            name="lastName"
          />
        </div>
        <input
          type="text"
          placeholder="Enter description"
          name="description"
          value={contactDetails.description}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter email address"
          name="emailAddress"
          value={contactDetails.emailAddress}
          onChange={handleChange}
        />
        <button className="contact-form__btn">Add</button>
      </form>
    </div>
  );
};

export default NewContactForm;
