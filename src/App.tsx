import "./App.css";
import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { BottomNavigationAction, Paper } from "@mui/material";
import AddchartIcon from "@mui/icons-material/Addchart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { Link, Outlet } from "react-router-dom";
import { CREATE_SCHEDULE_PATH, HOME_PATH, PROFILE_PATH } from "./routes/RoutesPath";

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="App">
      <div className="App-header"></div>
      <div className="App-body">
        <Outlet />
      </div>
      <div className="App-footer">
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Link to={HOME_PATH}>
              {" "}
              <BottomNavigationAction
                label="Recents"
                value="home"
                icon={<AnalyticsIcon />}
              />{" "}
            </Link>
            <Link to={CREATE_SCHEDULE_PATH}>
              {" "}
              <BottomNavigationAction
                label="Favorites"
                value="create"
                icon={<AddchartIcon />}
              />{" "}
            </Link>
            <Link to={PROFILE_PATH}>
              {" "}
              <BottomNavigationAction
                label="Nearby"
                value="profile"
                icon={<AccountBoxIcon />}
              />{" "}
            </Link>
          </BottomNavigation>
        </Paper>
      </div>
    </div>
  );
}

export default App;
