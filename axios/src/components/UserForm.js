import React, { useState, useEffect } from "react";

const UserForm = ({ onAddUser, onUpdateUser, editingUser }) => {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    } else {
      setUser({ name: "", email: "" });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      onUpdateUser(user);
    } else {
      onAddUser(user);
    }
    setUser({ name: "", email: "" });
  };

  return (
    <div className="mb-4">
      <h2>{editingUser ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          {editingUser ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
