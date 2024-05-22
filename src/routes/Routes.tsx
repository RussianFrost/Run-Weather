import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import Profile from "../pages/Profile/Profile"
import Home from "../pages/Home/Home"
import CreateSchedule from "../pages/CreateSchedule/CreateSchedule";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path:"profile", element: <Profile />},
            {path:"", element: <Home />},
            {path:"createschedule", element: <CreateSchedule />}
        ],
    },
]);