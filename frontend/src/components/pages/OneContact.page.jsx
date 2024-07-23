import React from 'react';
import { useParams } from 'react-router-dom';
import placeholder from '../../assets/placeholder.png';

const OneContactPage = () => {
  const { contactId } = useParams();
  const contact = { id: contactId, firstName: 'Josh', lastName: 'Kaiser', phone: '0176123456', email: 'josh@web.de', photo: null };

  return (
    <div className='one-contact-wrapper'>
      <div className='main-info'>
        <img src={contact.photo || placeholder} alt={`${contact.firstName} ${contact.lastName}`} />
        <h2>{contact.firstName} {contact.lastName}</h2>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
      <div className='other-info'>
        <div>
          <h3>Address</h3>
          <p>{contact.email}</p>
        </div>
        <div>
          <h3>Zip code</h3>
          <p>{contact.phone}</p>
        </div>
        <div>
          <h3>City</h3>
          <p>{contact.email}</p>
        </div>
        <div>
          <h3>Country</h3>
          <p>{contact.email}</p>
        </div>
      </div>
    </div>
  );
};

export default OneContactPage;