import { User } from "./User.jsx";
import { Header } from "../header/Header.jsx";
import "./UsersPage.css";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/api.js";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await getAllUsers()
        .then((collected_users) => {
          setUsers(collected_users.data);
        })
        .catch((error) => {
          if (error.response) {
            console.log("Server responded with HTTP " + error.response.status + " " + error.response.statusText);
          } else if (error.request) {
            console.log("Can't reach the server");
          } else {
            console.log("Unknown error happened");
          }
        });
    }
    fetchData();
  }, []);

  const usersList = users.map((user) => <User user={user} />);

  return (
    <div className="users-page">
      <Header />
      <div className="users-page__users">
        <div className="users-page__users__table-header">
          <p className="users-page__users__table-header__column-name">Username</p>
          <p className="users-page__users__table-header__column-name">Created</p>
          <p className="users-page__users__table-header__column-name">Group</p>
          <button className="users-page__users__table-header__add-user-button">Add User</button>
        </div>
        {usersList}
      </div>
    </div>
  );
};
