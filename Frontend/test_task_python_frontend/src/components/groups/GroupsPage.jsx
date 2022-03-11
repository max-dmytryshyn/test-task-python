import { useEffect, useState } from "react";
import { createGroup, getAllGroups } from "../../services/api";
import { Header } from "../header/Header";
import { Group } from "./Group";
import { GroupFormModal } from "./GroupFormModal";
import "./GroupsPage.css";

export const GroupsPage = () => {
  const [groups, setGroups] = useState([]);
  const [renderValue, setRenderValue] = useState(false);
  const renderGroups = () => {
    setRenderValue(!renderValue);
  };
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
  }, [renderValue]);

  const groupsList = groups
    .sort((group1, group2) => {
      if (group1.id > group2.id) {
        return 1;
      } else if (group1.id < group2.id) {
        return -1;
      } else {
        return 0;
      }
    })
    .map((group) => <Group group={group} renderGroups={renderGroups} />);

  const submitGroupCreation = async (name, description) => {
    await createGroup(name, description)
      .then((response) => {
        renderGroups();
      })
      .catch((error) => {
        if (error.response) {
          let errorText =
            "ERROR\nServer responded with HTTP " + error.response.status + " " + error.response.statusText + "\n";
          if (typeof error.response.data["name"] !== "undefined") {
            errorText += "Name: " + error.response.data["name"] + "\n";
          }
          if (typeof error.response.data["description"] !== "undefined") {
            errorText += "Description: " + error.response.data["description"] + "\n";
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
    <div className="groups-page">
      <Header />
      <div className="groups-page__groups">
        <div className="groups-page__groups__table-header">
          <p className="groups-page__groups__table-header__id">ID</p>
          <p className="groups-page__groups__table-header__name">Name</p>
          <p className="groups-page__groups__table-header__description">Description</p>
          <GroupFormModal
            trigger={<button className="groups-page__groups__table-header__add-user-button">Add Group</button>}
            operateGroupFormData={submitGroupCreation}
          />
        </div>
        {groupsList}
      </div>
    </div>
  );
};
