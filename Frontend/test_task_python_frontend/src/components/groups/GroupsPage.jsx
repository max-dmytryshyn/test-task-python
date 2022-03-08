import { useEffect, useState } from "react";
import { getAllGroups } from "../../services/api";
import { Header } from "../header/Header";
import { Group } from "./Group";
import "./GroupsPage.css";

export const GroupsPage = () => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await getAllGroups()
        .then((collected_groups) => {
          setGroups(collected_groups.data);
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

  const groupsList = groups.map((group) => <Group group={group} />);

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
        {groupsList}
      </div>
    </div>
  );
};
