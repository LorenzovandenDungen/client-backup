import React, { useState } from "react";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // you should replace this URL with your own endpoint
    const response = await axios.post("http://localhost:5000/api/admin/login", {
      email,
      password
    });

    if (response.data.authenticated) {
      // The admin is authenticated
      // You should save the admin's session info here
    } else {
      // The credentials were incorrect
      // Show an error message here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLogin;
