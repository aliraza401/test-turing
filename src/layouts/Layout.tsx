import React from "react";
import { matchRoutes, Navigate, useLocation } from "react-router-dom";
import { Header } from './../components/Header';

import { useAppSelector } from "../redux/store/hooks"
import {
  AUTHENTICATED_ROUTES,
  UNAUTHENTICATED_ROUTES,
} from "../router/routes";

import { paths } from './../constants/paths';
import { LayoutProps } from "./Layout.interfaces";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  const token = useAppSelector((store) => store.auth.access_token)
  const isAuthenticated = !!token;

  const authenticated_route = !!matchRoutes(AUTHENTICATED_ROUTES, pathname)?.length;
  const unauthenticated_route = !!matchRoutes(UNAUTHENTICATED_ROUTES, pathname)?.length;

  console.log({ isAuthenticated });

  if (!isAuthenticated && authenticated_route)
    return <Navigate to={paths.URL_LOGIN} />;

  if (isAuthenticated && unauthenticated_route)
    return <Navigate to={paths.URL_HOME} replace />;

  return (
    <div className="min-h-screen">
      <Header />
      {children(isAuthenticated)}
    </div>
  );
};
