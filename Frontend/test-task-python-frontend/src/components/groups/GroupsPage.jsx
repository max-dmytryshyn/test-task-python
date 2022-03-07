import { Header } from "../header/Header";
import { Group } from "./Group";
import "./GroupsPage.css";

export const GroupsPage = () => {
  return (
    <div className="groups-page">
      <Header />
      <div className="groups-page__groups">
        <div className="groups-page__groups__table-header">
          <p className="groups-page__groups__table-header__id">ID</p>
          <p className="groups-page__groups__table-header__name">Name</p>
          <p className="groups-page__groups__table-header__description">Description</p>
          <button className="groups-page__groups__table-header__add-user-button">Add Group</button>
        </div>
        <Group />
        <Group />
        <Group />
      </div>
    </div>
  );
};
