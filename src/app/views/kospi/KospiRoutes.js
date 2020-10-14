import React from "react";
import { authRoles } from "../../auth/authRoles";

const kospiRoutes = [
  {
    path: "/kospi/analytics2",
    component: React.lazy(() => import("./Analytics2")),
    auth: authRoles.admin
  }
];

export default kospiRoutes;
