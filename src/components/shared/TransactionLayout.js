import React from "react";
import { Route, Switch } from "react-router";
import Category from "../finance/category";
import CreateTransaction from "../finance/createTransaction";

export default () => {
  return (
    <Switch>
      <Route path="/transaction/category" component={UngradedList} />
      <Route path="/transaction/create" component={GradedList} />
    </Switch>
  );
};
