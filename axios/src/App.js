import "./App.css";
import { useState, useEffect } from "react";
import {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
} from "./components/Apis";
import axios from "axios";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(data);

  return (
    <div className="App">
      <h1>Axios</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
