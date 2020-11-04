import React from "react";
import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const lgchem = MatxLoadable({
  loader: () => import("./Lgchem")
})
const lginnotek = MatxLoadable({
  loader: () => import("./Lginnotek")
})

const kospiRoutes = [
  {
    path: "/kospi/lgchem",
    component: lgchem,
    auth: authRoles.admin
  },
  {
    path:"/kospi/lginnotek",
    component: lginnotek,
    auth: authRoles.admin
  }
];

export default kospiRoutes;


// const kospiRoutes = [
//   {
//     path: "/kospi/Lgchem",
//     component: React.lazy(() => import("./Lgchem")),
//   },
//   {
//     path:"/kospi/Lginnotek",
//     component: React.lazy(() => import("./Lginnotek")),
//   }
// ];

// export default kospiRoutes;









