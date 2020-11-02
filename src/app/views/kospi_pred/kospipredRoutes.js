import React from "react";

const kospipredRoutes = [
  {
    path: "/kospi_pred/lgchem",
    component: React.lazy(() => import("./lgchem"))
  },
  {
    path: "/kospi_pred/lginnotek",
    component: React.lazy(() => import("./lginnotek"))
  },
];

export default kospipredRoutes;
