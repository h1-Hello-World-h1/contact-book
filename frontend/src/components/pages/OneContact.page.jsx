import React from 'react';
import { useParams } from 'react-router-dom';

const OneContactPage = () => {
  const { contactId } = useParams();
  const contact = { id: contactId, firstName: 'Josh', lastName: 'Kaiser', phone: '0176123456', email: 'josh@web.de', photo: null };

  return (
    <div>
      <img src={contact.photo || '../assets/placeholder.png'} alt={`${contact.firstName} ${contact.lastName}`} />
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
    </div>
  );
};

export default OneContactPage;