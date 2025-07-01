import { useState } from "react";
import AddContact from "./AddContact";
import ShowContacts from "./ShowContacts";

function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Gobi", phone: "99876543" },
    { id: 2, name: "Dad", phone: "03988465" },
  ]);

  const addContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: Date.now() }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="app-container">
      <AddContact onAddContact={addContact} />
      <ShowContacts contactList={contacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
