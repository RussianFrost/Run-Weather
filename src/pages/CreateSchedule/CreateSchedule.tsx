import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Button from '@mui/material/Button';

export default function BasicDateCalendar() {
    return (
        <React.Fragment>
            <h1 style={{ textAlign: 'center' }}>Создание расписания</h1>
            <h2 style={{ textAlign: 'center', fontSize: '20px' }}>Выберите даты тренировок:</h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
            </LocalizationProvider>
            <div style={{ textAlign: 'center' }}>
                <Button variant="contained" color="primary" style={{borderRadius: '25px', marginLeft: '200px', backgroundColor: '#5D63D1'}}>Далее</Button>
            </div>
        </React.Fragment>
    );
}
