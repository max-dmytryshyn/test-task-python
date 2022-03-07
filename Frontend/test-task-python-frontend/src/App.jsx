import { Route, Routes } from "react-router-dom";
import { UsersPage } from "./components/users/UsersPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
