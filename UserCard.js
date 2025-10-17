import React from 'react';
import './UserCard.css';

function UserCard({ name, age, bio, image }) {
  return (
    <div className="user-card">
      <img src={image} alt={name} className="user-image" />
      <h2 className="user-name">{name}</h2>
      <p className="user-age">Age: {age}</p>
      <p className="user-bio">{bio}</p>
    </div>
  );
}

export default UserCard;

