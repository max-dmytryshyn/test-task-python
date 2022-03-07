import { User } from "./User.jsx";
import { Header } from "../header/Header.jsx";
import "./UsersPage.css";

export const UsersPage = () => {
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
        <User />
        <User />
        <User />
      </div>
    </div>
  );
};
