import { User } from "./User.jsx";
import { Header } from "../header/Header.jsx";
import "./UsersPage.css";
import { useEffect, useState } from "react";
import { createUser, getAllUsers } from "../../services/api.js";
import { UserFormModal } from "./UserFormModal.jsx";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [renderValue, setRenderValue] = useState(false);
  const renderUsers = () => {
    setRenderValue(!renderValue);
  };

  useEffect(() => {
    async function fetchData() {
      await getAllUsers()
        .then((collected_users) => {
          setUsers(collected_users.data);
        })
        .catch((error) => {
          if (error.response) {
            window.alert(
              "ERROR\nServer responded with HTTP " + error.response.status + " " + error.response.statusText
            );
          } else if (error.request) {
            window.alert("ERROR\nCan't reach the server");
          } else {
            window.alert("ERROR\nUnknown error happened");
          }
        });
    }
    fetchData();
  }, [renderValue]);

  const usersList = users
    .sort((user1, user2) => {
      if (user1.username > user2.username) {
        return 1;
      } else if (user1.username < user2.username) {
        return -1;
      } else {
        return 0;
      }
    })
    .map((user) => <User user={user} renderUsers={renderUsers} />);

  const submitUserCreation = async (username, group) => {
    await createUser(username, group.id)
      .then((response) => {
        renderUsers();
      })
      .catch((error) => {
        if (error.response) {
          let errorText =
            "ERROR\nServer responded with HTTP " + error.response.status + " " + error.response.statusText + "\n";
          if (typeof error.response.data["username"] !== "undefined") {
            errorText += "Username: " + error.response.data["username"] + "\n";
          }
          if (typeof error.response.data["group"] !== "undefined") {
            errorText += "Group: " + error.response.data["group"] + "\n";
          }
          window.alert(errorText);
        } else if (error.request) {
          window.alert("ERROR\nCan't reach the server");
        } else {
          window.alert("ERROR\nUnknown error happened");
        }
      });
  };

  return (
    <div className="users-page">
      <Header />
      <div className="users-page__users">
        <div className="users-page__users__table-header">
          <p className="users-page__users__table-header__column-name">Username</p>
          <p className="users-page__users__table-header__column-name">Created</p>
          <p className="users-page__users__table-header__column-name">Group</p>
          <UserFormModal
            trigger={<button className="users-page__users__table-header__add-user-button">Add User</button>}
            operateUserFormData={submitUserCreation}
          />
        </div>
        {usersList}
      </div>
    </div>
  );
};
