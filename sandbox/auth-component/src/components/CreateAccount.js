import { useState } from "react";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1>Create Account</h1>
      <form>
        <label for="email_input">Email:</label>
        <input
          id="email_input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password_input">Password:</label>
        <input
          id="password_input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label for="confirm_password">Confirm Password</label>
        <input
          id="confirm_password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </>
  );
};

export default CreateAccount;
