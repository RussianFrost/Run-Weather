import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import UserProfile from "../pages/Profile/UserProfile";
import Home from "../pages/Home/Home";
import CreateSchedule from "../pages/CreateSchedule/CreateSchedule";
import { CREATE_SCHEDULE_PATH, HOME_PATH, PROFILE_PATH } from "./RoutesPath";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: PROFILE_PATH, element: <UserProfile /> },
      { path: HOME_PATH, element: <Home /> },
      { path: CREATE_SCHEDULE_PATH, element: <CreateSchedule /> },
    ],
  },
]);
