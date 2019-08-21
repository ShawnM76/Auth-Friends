import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utility/axiosWithAuth';
import AddFriends from './AddFriends';
import DisplayFriends from '../friends/DisplayFriends';

const GetFriends = () => {
  const [friends, setFriends] = useState([]);

  function getData() {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(results => {
        setFriends(results.data);
      })
      .catch(error => console.log(error.response));
  }
  useEffect(() => getData(), []);

  const deleteFriend = id => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(results => {
        console.log(results.data);
      })
      .catch(error => console.log(error.response));
  };

  console.log('friends', friends);
  return (
    <div>
      <div>
        <h2>Friends</h2>
        {friends.length > 0
          ? friends.map(friend => (
              <>
                <DisplayFriends key={friend.id} friend={friend} />
                <buton onClick={() => deleteFriend(friend.id)}>
                  Delete Friend
                </buton>
              </>
            ))
          : null}
      </div>
      <AddFriends />
    </div>
  );
};

export default GetFriends;
