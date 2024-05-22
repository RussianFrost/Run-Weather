import './index.css';
import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import {BottomNavigationAction} from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, Outlet } from 'react-router-dom';

function App() {
    return (
    <div className="App">
      <BottomNavigation showLabels>
      <Link to={``}> <BottomNavigationAction label="Recents" icon={<RestoreIcon />} /> </Link>
      <Link to={`createschedule`}> <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> </Link>
      <Link to={`profile`}> <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> </Link>
      </BottomNavigation>
      <Outlet />
    </div>
  );
}

export default App;
