import { useContext } from "react";
import { AppContext } from "./App";

const Dashboard = () => {
  const { test } = useContext(AppContext);
  return (
    <div className="dashboard">
      <h3 className="active-heading">
        {test.active ? "Active Test" : "Last Test"}
      </h3>
      <div className="dashboard-headings">
        <h2 className="dashboard-heading">Name: {test.title}</h2>
        <h2 className="dashboard-heading">Type: {test.type}</h2>
      </div>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th></th>
            <th>Old Version</th>
            <th>New Version</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="first-column">Users</td>
            <td>239</td>
            <td>{test.users}</td>
          </tr>
          <tr>
            <td className="first-column">Clicked</td>
            <td>48</td>
            <td>{test.clicked}</td>
          </tr>
          <tr>
            <td className="first-column">Conversion Rate</td>
            <td>20%</td>
            <td>
              {test.users > 0
                ? `${Math.round((test.clicked / test.users) * 100)} %`
                : "-"}
            </td>
          </tr>
        </tbody>
      </table>
      {test.users > 0 && (
        <h2 className="dashboard-message">
          You should use {test.clicked / test.users > 0.2 ? "new" : "old"}{" "}
          version of the component!
        </h2>
      )}
    </div>
  );
};

export default Dashboard;
