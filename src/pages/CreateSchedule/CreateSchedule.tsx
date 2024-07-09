import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Button from "@mui/material/Button";
import "./CreateSchedule.css";

export default function CreateSchedule() {
  return (
    <React.Fragment>
      <h1 className="text-header">Создание расписания</h1>
      <h2 className="training-date">Выберите даты тренировок:</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
      <div className="div-button">
        <Button variant="contained" color="primary" className="button-further">
          Далее
        </Button>
      </div>
    </React.Fragment>
  );
}
