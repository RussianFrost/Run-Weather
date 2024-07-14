import React from "react";
import {Menu, MenuItem, Typography} from "@mui/material";
import "./WeatherMainComponent.css";
import Button from "@mui/material/Button";
import PlaceIcon from '@mui/icons-material/Place';
import "@fontsource/inter/100.css";

type WeatherMainComponentData = {
  // title: string;
  // data: string;
  // description?: string;
};


const WeatherMainComponent: React.FC<WeatherMainComponentData> = (weatherMicro) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
      <div className="main-container">
          <div className="button-city">
              <Button
                  id="city-positioned-button"
                  aria-controls={open ? 'city-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
              >
                  <Typography className="text-button"> <PlaceIcon className="city-icon"
                                                                  fontSize="small"/>Омск</Typography>
              </Button>
              <Menu
                  id="city-positioned-menu"
                  aria-labelledby="city-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                  }}
                  transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                  }}
              >
                  <MenuItem onClick={handleClose}>Поиск</MenuItem>
                  <MenuItem onClick={handleClose}>Москва</MenuItem>
                  <MenuItem onClick={handleClose}>Санкт-Петербург</MenuItem>
                  <MenuItem onClick={handleClose}>Ростов-на-Дону</MenuItem>
              </Menu>
          </div>
          <div className="best-time-today">
              <div className="best-time-data-block">
                  <Typography variant="h6" className="best-time-data">15:00</Typography>
                  <Typography variant="h6" className="best-time-data">-</Typography>
                  <Typography variant="h6" className="best-time-data">17:00</Typography>
              </div>
              <Typography className="best-time-text">Лучшее время сегодня</Typography>
          </div>
          <div className="weather-data">
              <div className="weather-data-block">
                  <Typography variant="body1" className="weather-data-name">Ветер</Typography>
                  <Typography variant="body1" className="weather-data-number">3</Typography>
                  <Typography variant="body1" className="weather-data-sub">м/с</Typography>
              </div>
              <div className="weather-data-block">
                  <Typography variant="body1" className="weather-data-name">Температура</Typography>
                  <Typography variant="body1" className="weather-data-number">23</Typography>
                  <Typography variant="body1" className="weather-data-sub">°C</Typography>
              </div>
              <div className="weather-data-block">
                  <Typography variant="body1" className="weather-data-name">Влажность</Typography>
                  <Typography variant="body1" className="weather-data-number">70</Typography>
                  <Typography variant="body1" className="weather-data-sub">%</Typography>
              </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 60" className="wave-svg">
              <path fill="white" fill-opacity="1"
                    d="M-82 12.6001L-60.25 15.2417C-38.5 17.7845 5 23.2157 48.5 24.4501C92 25.6845 135.5 23.2157 179 16.5501C222.5 9.88447 266 -0.484284 309.5 0.750091C353 1.98447 396.5 15.3157 418.25 21.8085L440 28.4001V60.0001H418.25C396.5 60.0001 353 60.0001 309.5 60.0001C266 60.0001 222.5 60.0001 179 60.0001C135.5 60.0001 92 60.0001 48.5 60.0001C5 60.0001 -38.5 60.0001 -60.25 60.0001H-82V12.6001Z"/>
          </svg>
      </div>

  );
};

export default WeatherMainComponent;