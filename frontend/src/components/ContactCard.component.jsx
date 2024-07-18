import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../assets/placeholder.png';

const ContactCard = ({ contact, onDelete, onView }) => {
  return (
    <div className="contact-card">
      <img src={contact.photo || placeholder} alt={`${contact.firstName} ${contact.lastName}`} />
      <div>
        <h2>{contact.firstName} {contact.lastName}</h2>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
      <div>
        <button onClick={() => onDelete(contact.id)}>Delete</button>
        <button onClick={onView}>View</button>
        <Link to={`/edit/${contact.id}`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
