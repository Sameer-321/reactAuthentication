import React from 'react';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

function Login() {
  // const userRef = useRef();
  // const errRef = useRef();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    // userRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.prevent.Default();
  };

  return (
    <>
      <section>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={changeHandler}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            value={user.password}
          />
          <button type="submit">Sign In</button>
        </form>
      </section>
    </>
  );
}

export default Login;
