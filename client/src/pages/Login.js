import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    console.log('hello world');
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>YOu are logged in</h1>
          <Link>just go to home</Link>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? 'errMsg' : 'offscreen'}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => {
                setUser(e.target.value);
              }}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => {
                setUser(e.target.value);
              }}
              value={pwd}
              required
            />
            <button type="submit">Sign In</button>
          </form>
        </section>
      )}
    </>
  );
}

export default Login;
