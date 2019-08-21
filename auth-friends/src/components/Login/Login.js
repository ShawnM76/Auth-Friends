import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {
  const [name, setName] = useState({
    username: '',
    password: '',
  });

  const handleChange = event => {
    event.preventDefault();
    setName({ ...name, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setName({ ...name, [event.target.name]: event.target.value });
  };

  const login = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/login', name)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/friends');
      })
      .catch(error => console.log(error.response));
    props.history.push('/friends');
  };

  return (
    <div>
      <h1>Please Login!</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <input
          type='text'
          name='username'
          placeholder='username'
          onChange={handleChange}
          value={name.username}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          onChange={handleChange}
          value={name.password}
        />
        <button onClick={login}>Log in</button>
      </form>
    </div>
  );
};

export default Login;
