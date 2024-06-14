import "./App.css";
import { useState, useEffect } from "react";
import {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
} from "./components/Apis";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers().then((response) => setUsers(response.data));
  }, []);

  const handleAddUser = (user) => {
    createUser(user).then((response) => setUsers([...users, response.data]));
  };

  const handleUpdateUser = (updatedUser) => {
    updateUser(updatedUser.id, updatedUser).then(() => {
      setUsers(
        users.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
      );
    });
    setEditingUser(null);
  };

  const handleDeleteUser = (id) => {
    deleteUser(id).then(() => setUsers(users.filter((user) => user.id !== id)));
  };

  return (
    <div className="App">
      <h1>Axios</h1>
      <UsersList
        users={users}
        onEditUser={setEditingUser}
        onDeleteUser={handleDeleteUser}
      />
    </div>
  );
}

export default App;
