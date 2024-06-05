import React from "react";
import './Home.css'
import {Paper, Typography} from "@mui/material";

const Home = () => {
  return (
      <div className="home-page">
        <Typography variant="h4" gutterBottom>
              Добро пожаловать!
        </Typography>

          <Paper className="wearth-block" variant="elevation" elevation={1}>
              <Typography variant="body1" gutterBottom className="values-wearth-name"> Лучшее время для бега:</Typography>
              <Typography variant="h5" gutterBottom className="values-wearth"> 15:00 - 17:00 </Typography>
              <Typography variant="h6" gutterBottom className="values-wearth"> 24 C, 2 m/s </Typography>

          </Paper>
          {/*<Card className="wearth-block">*/}
          {/*  */}
          {/*</Card>*/}

      </div>
  )
};

export default Home;
