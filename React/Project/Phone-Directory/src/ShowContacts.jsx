import Header from "./Header";

function ShowContacts({ contactList, onDeleteContact }) {
  return (
    <div className="contact-list-container">
      <Header headerName="Contact List" />

      <div className="contacts-grid">
        {/* Header Row */}
        <div className="grid-header">
          <div className="grid-cell">Name</div>
          <div className="grid-cell">Phone Number</div>
          <div className="grid-cell">Action</div>
        </div>

        {/* Contact Rows */}
        {contactList.length === 0 ? (
          <div className="empty-message">No contacts found</div>
        ) : (
          contactList.map((contact) => (
            <div key={contact.id} className="grid-row">
              <div className="grid-cell">{contact.name}</div>
              <div className="grid-cell">{contact.phone}</div>
              <div className="grid-cell">
                <button
                  onClick={() => onDeleteContact(contact.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ShowContacts;
