import React from "react";
import './Home.css'
import {Paper, Typography} from "@mui/material";

const Home = () => {
  return (
      <div className="home-page">
        <Typography variant="h5" gutterBottom>
              Добро пожаловать!
        </Typography>

          <Paper className='wearth-block' variant="elevation" elevation={1}>
              <Typography variant="body1" gutterBottom className='values-wearth-name'> Лучшее время для бега:</Typography>
              <Typography variant="h5" gutterBottom className='values-wearth'> 15:00 - 17:00 </Typography>
              <Typography variant="h6" gutterBottom className='values-wearth'> 24 C, 2 m/s </Typography>
          </Paper>

          <Typography variant="h6" gutterBottom>
              Погода сегодня:
          </Typography>
          <Paper className='wearth-today-block' variant="elevation" elevation={1}>
                <div className="wearth-city">
                <Typography variant="button" display="block" gutterBottom> Sonoma </Typography>
                <Typography variant="h4" display="block" gutterBottom> 76° </Typography>
                </div>
                <div className="wearth-status">
                <Typography variant="button" display="block" gutterBottom> Sunny </Typography>
                </div>
                <div className="wearth-week">

                </div>
          </Paper>
          {/*<Card className="wearth-block">*/}
          {/*  */}
          {/*</Card>*/}

      </div>
  )
};

export default Home;
