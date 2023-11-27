import { useState } from "react";
import Dashboard from "./Dashboard";
import NewTest from "./NewTest";

const AdminPage = () => {
  const [activeButton, setActiveButton] = useState("dashboard");

  return (
    <div>
      <div className="admin-nav">
        <button
          onClick={() => setActiveButton("dashboard")}
          className={
            activeButton === "dashboard"
              ? "admin-nav-button active-button"
              : "admin-nav-button"
          }
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveButton("test")}
          className={
            activeButton === "test"
              ? "admin-nav-button active-button"
              : "admin-nav-button"
          }
        >
          New Test
        </button>
      </div>
      {activeButton === "dashboard" ? <Dashboard /> : <NewTest />}
    </div>
  );
};

export default AdminPage;
