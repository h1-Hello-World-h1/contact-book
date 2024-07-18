import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar.component';
import ContactCard from '../ContactCard.component';

const ContactsListPage = () => {
  const [contacts, setContacts] = useState([
    { id: 1, firstName: 'Sören', lastName: 'Böttcher', phone: '0170123456', email: 'sören@web.de', photo: null },
    { id: 2, firstName: 'Josh', lastName: 'Kaiser', phone: '0176123456', email: 'joshi@web.de', photo: null },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredContacts = contacts.filter(contact =>
    `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div>
        {filteredContacts.map(contact => (
          <ContactCard 
            key={contact.id} 
            contact={contact} 
            onDelete={handleDelete}
            onView={() => navigate(`/contacts/${contact.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsListPage;