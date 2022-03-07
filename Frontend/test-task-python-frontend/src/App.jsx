import { Route, Routes } from "react-router-dom";
import { UsersPage } from "./components/users/UsersPage";
import { GroupsPage } from "./components/groups/GroupsPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/groups" element={<GroupsPage />} />
      </Routes>
    </div>
  );
}

export default App;
