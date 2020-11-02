import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Connection = MatxLoadable({
    loader: () => import("./Home")
  })

const homeRoutes = [
  {
    path: "/home",
    component: Connection,
    auth: authRoles.admin
  }
];

export default homeRoutes;