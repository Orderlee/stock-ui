import React from "react";
import { Redirect } from "react-router-dom";

import homeRoutes from "./views/home/HomeRoutes"
import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import kospiRoutes from "./views/kospi/KospiRoutes";
import kospipredRoutes from "./views/kospi_pred/KospipredRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";

import materialRoutes from "./views/material-kit/MaterialRoutes";
import dragAndDropRoute from "./views/Drag&Drop/DragAndDropRoute";

import formsRoutes from "./views/forms/FormsRoutes";
import mapRoutes from "./views/map/MapRoutes";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard/analytics" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...sessionRoutes,
  ...dashboardRoutes,
  ...homeRoutes,
  ...materialRoutes,
  ...kospiRoutes,
  ...kospipredRoutes,
  ...dragAndDropRoute,
  ...formsRoutes,
  ...mapRoutes,
  ...redirectRoute,
  ...errorRoute,
];

export default routes;
