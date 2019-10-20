import React from "./node_modules/react";
import FinanceDashboard from "./FinanceDashboard";
import Layout from "../shared/Layout";
import * as storage from "../../helpers/local-storage";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: storage.getUserInfo(),
    };
  }

  render() {
    const { loggedInUser } = this.state;
    const isLoggedIn = loggedInUser.id ? true : false;
    return (
      <React.Fragment>
        <Layout isLoggedIn={isLoggedIn}></Layout>
        <FinanceDashboard></FinanceDashboard>
      </React.Fragment>
    );
    
  }
}

export default Dashboard;