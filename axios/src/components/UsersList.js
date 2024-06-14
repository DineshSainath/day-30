import React from "react";

const UsersList = ({ users, onEditUser, onDeleteUser }) => (
  <div>
    <h2>User List</h2>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          Name: {user.name} - Email: {user.email}
          <button onClick={() => onEditUser(user)}>Edit</button>
          <button onClick={() => onDeleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default UsersList;
