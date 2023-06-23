/* eslint-disable react/prop-types */
import "./Sidebar.css";

const Sidebar = (props) => {
  const contacts = props.contacts;
  const setSelectedContact = props.setSelectedContact;
  const setShowContactForm = props.setShowContactForm;

  return (
    <div className="sidebar">
      <h4 className="sidebar-heading">My Contacts</h4>
      <div className="sidebar-list">
        {contacts.length > 0 ? (
          contacts.map((contact, index) => {
            return (
              <p
                onClick={() => {
                  setSelectedContact(contact);
                  setShowContactForm(false);
                }}
                className="sidebar-list__item"
                key={index + contact.firstName}
              >
                <span>{contact.firstName}</span>
                <span>{contact.lastName}</span>
                <span>{contact.description}</span>
              </p>
            );
          })
        ) : (
          <p>Your contacts will appear here</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
