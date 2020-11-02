import React from "react";
import { authRoles } from "../../auth/authRoles";

const kospiRoutes = [
  {
    path: "/kospi/lgchem",
    component: React.lazy(() => import("./lgchem")),
    auth: authRoles.admin
  },
  {
    path:"/kospi/lginnotek",
    component: React.lazy(() => import("./lginnotek")),
  }
];

export default kospiRoutes;



