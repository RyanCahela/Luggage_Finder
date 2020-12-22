import { useState } from "react";
import styled from "styled-components";
import authServices from "src/services/authServices";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit fired on Login!");
    authServices
      .login(email, password)
      .then(() => {
        //reset form
        setEmail("");
        setPassword("");
      })
      .catch((err) => setError(err.message ? err.message : err));
  };

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="login_email">Email</label>
        <input
          id="login_email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="login_password">Password</label>
        <input
          id="login_password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </Form>
      {error ? <div style={{ color: "red" }}>{error}</div> : null}
    </>
  );
};

export default Login;
