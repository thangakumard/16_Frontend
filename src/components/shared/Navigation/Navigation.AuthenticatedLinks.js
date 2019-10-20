import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import * as storage from "../../../helpers/local-storage";

const AuthenticatedLinks = () => {
  const getUserName = () => {
    return storage.getUserInfo().userName;
  };
  const logout = () => {
    storage.clearUserInfo();
    window.location.reload();
  };

  return (
    <div className="row">
      <div className="col-sm-10">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link menuLink" to={`/`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link menuLink" to={`/finance`}>
              Finance
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link menuLink" to={`/timesheet`}>
              Timesheet
            </Link>
          </li>
          <li className="nav-item">
            <button className="btn btn-link menuLink">
              Dairy
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-link menuLink" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="col-sm-2 menuLink">Welcome, {getUserName()}!</div>
    </div>
  );
};
export default withRouter(AuthenticatedLinks);
