import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { ROUTES } from "./core/constants/routes";

export default [
  layout("modules/home/layout/index.tsx", [
    index("modules/home/home.tsx"),
  ]),
  layout("modules/auth/layouts/index.tsx", [
    route(ROUTES.LOGIN, "modules/auth/screens/login/index.tsx"),
    route(ROUTES.SIGNUP, "modules/auth/screens/signup/index.tsx"),
  ]),
  route(ROUTES.NOT_FOUND, "modules/$.tsx"),
] satisfies RouteConfig;
