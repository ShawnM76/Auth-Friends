import React, { useState } from 'react';
import axiosWithauth from '../utility/axiosWithAuth';

const AddFriends = props => {
  const [name, setName] = useState({ name: '', age: '', email: '' });

  const changeHandler = event => {
    event.preventDefault();
    setName({ ...name, [event.target.name]: event.target.value });
  };

  const addFriend = event => {
    event.preventDefault();
    axiosWithauth()
      .post('http://localhost:5000/api/friends', name)
      .then(results => {
        console.log(results.data);
      })
      .catch(error => console.log(error.response));
  };

  return (
    <div>
      <form onSubmit={event => addFriend(event)} />
      <h1>Add more Friends</h1>
      <label>
        Name:{' '}
        <input
          type='text'
          name='name'
          onChange={changeHandler}
          value={name.name}
        />
      </label>
      <label>
        Age:{' '}
        <input
          type='age'
          name='age'
          onChange={changeHandler}
          value={name.age}
        />
      </label>
      <lable>
        Email:{' '}
        <input
          type='email'
          name='email'
          onChange={changeHandler}
          value={name.email}
        />
      </lable>
      <button onClick={addFriend}>Add Friend</button>
    </div>
  );
};

export default AddFriends;
