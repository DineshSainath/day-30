import React from "react";

const UsersList = ({ users, onEditUser, onDeleteUser }) => (
  <div>
    <h2>User List</h2>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button
                className="btn btn-primary btn-sm me-2"
                onClick={() => onEditUser(user)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDeleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UsersList;
