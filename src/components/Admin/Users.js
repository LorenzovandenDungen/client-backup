import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Fetch users from server when component mounts
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    // Replace with your own URL
    const response = await axios.get("http://localhost:5000/api/users");
    setUsers(response.data);
  };

  const addUser = async () => {
    // Replace with your own URL
    const response = await axios.post("http://localhost:5000/api/users", {
      name,
      email
    });
    fetchUsers();
  };

  const deleteUser = async (id) => {
    // Replace with your own URL
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers();
  };

  return (
    <div>
      <h2>Users</h2>
      <form onSubmit={addUser}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Add User</button>
      </form>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} ({user.email})</p>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Users;
