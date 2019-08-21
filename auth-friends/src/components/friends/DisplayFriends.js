import React from 'react';

const DisplayFriends = ({ friend }) => {
  return (
    <div>
      <h4>Name: {friend.name}</h4>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
    </div>
  );
};

export default DisplayFriends;
