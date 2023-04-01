import React, { useState } from "react";
import Contact from "./components/Contact";
import ContactAdder from "./components/Contact_Adder";
import NavBar from "./components/NavBar";
import "./styles/app.css";

const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));

  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  const addContactData = (contactData) => {
    const allContacts = [contactData, ...contacts];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };
  const clearAllContacts = () => {
    localStorage.clear();
    setContacts([]);
  };
  return (
    <>
      <NavBar />
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>
      <div className="contact_list">
        <h3>Contact List: </h3>

        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}

        <button onClick={clearAllContacts} style={{ background: "#cc0800" }}>
          Clear All Contacts
        </button>
      </div>
    </>
  );
};

export default App;
