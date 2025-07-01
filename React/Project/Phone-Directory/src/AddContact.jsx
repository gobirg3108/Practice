import { useState } from "react";
import Header from "./Header";

function AddContact({ onAddContact }) {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.phone) {
      onAddContact(contact);
      setContact({ name: "", phone: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="add-contact">
      <Header headerName="Add Contact" />

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            placeholder="Enter your number"
            required
          />
        </div>

        <div className="preview">
          <p>Contact to be added:</p>
          <p>Name: {contact.name || "Not specified"}</p>
          <p>Phone: {contact.phone || "Not specified"}</p>
        </div>

        <button type="submit" className="button primary">
          Add Contact
        </button>
      </form>
    </div>
  );
}

export default AddContact;
