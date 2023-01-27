import { RouteObject } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";

import { paths } from './../constants/paths';

export interface Route extends RouteObject {
  name?: string;
  children?: Route[];
  icon?: JSX.Element;
}

export const AUTHENTICATED_ROUTES: Route[] = [
  {
    path: paths.URL_HOME,
    element: <Home />,
  },
];

export const UNAUTHENTICATED_ROUTES: Route[] = [
  {
    path: paths.URL_LOGIN,
    element: <Login />,
  },
];

export const OPEN_ROUTES: Route[] = [
  {
    path: "*",
    element: <NotFound />,
  },
];
