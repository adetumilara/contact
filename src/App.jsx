import Sidebar from "./components/Sidebar/Sidebar";
import MainSection from "./components/MainSection/MainSection";

// import { contacts } from "./data/contacts.json";
import { useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="app-component">
      <Sidebar
        contacts={contacts}
        setSelectedContact={setSelectedContact}
        setShowContactForm={setShowContactForm}
      />
      <MainSection
        selectedContact={selectedContact}
        showContactForm={showContactForm}
        setSelectedContact={setSelectedContact}
        setShowContactForm={setShowContactForm}
        setContacts={setContacts}
      />
    </div>
  );
};

export default App;
