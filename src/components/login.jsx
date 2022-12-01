import { useState } from 'react';

export default function Login({ setAdmin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .then((user) => setAdmin(user))
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </p>
      <p> Password:
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <button type="submit">Login</button>
    </form>
  );
}
