import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './headerComponent/headerComponent';

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const Submit = () => {
    console.log(name, password);
    if (
      (name === 'Luke Skywalker' && password === '19BBY') ||
      (name === 'Watto') & (password === 'unknown')
    ) {
      navigate('/planet');
    }
  };

  return (
    <>
      <Header />
      <div className="flex-container">
        <div className="flex">
          <label className="label-login" htmlFor="username">
            Name{' '}
          </label>
          <input
            id="username"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            // value="Luke Skywalker"
          />
        </div>
        <br />
        <div className="flex">
          <label className="label-password" htmlFor="password">
            Password{' '}
          </label>
          <input
            id="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            // value="19BBY"
          />
        </div>
        <br />
        <div>
          <button onClick={Submit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Login;
