/* eslint-disable react/prop-types */
import { Fragment } from "react";
import "./MainSection.css";

import NewContactForm from "../NewContactForm/NewContactForm";

const MainSection = (props) => {
  const selectedContact = props.selectedContact;
  const showContactForm = props.showContactForm;
  const setShowContactForm = props.setShowContactForm;
  const setSelectedContact = props.setSelectedContact;
  const setContacts = props.setContacts;
  function handleClick() {
    setShowContactForm(true);
    setSelectedContact(null);
  }

  if (showContactForm && selectedContact === null) {
    return <NewContactForm setContacts={setContacts} />;
  }

  return (
    <div className="main-section">
      <button className="main-section__button" onClick={handleClick}>
        Add New Contact
      </button>
      <div className="main-section__content">
        {selectedContact !== null ? (
          <Fragment>
            <div className="contact-image"></div>
            <div className="contact-details">
              <h2>
                {selectedContact.firstName} {selectedContact.lastName}
              </h2>
              <span>{selectedContact.description}</span>
              {/* <span>{selectedContact.phone_number}</span>
              <span>{selectedContact.email_address}</span> */}
            </div>
          </Fragment>
        ) : (
          <div>
            <h1>Please Select a Contact</h1>
          </div>
        )}
      </div>
    </div>
  );
};
export default MainSection;
