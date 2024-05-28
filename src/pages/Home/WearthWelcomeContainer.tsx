import React from 'react';

const WeatherWelcomeContainer = () => {
    return (
        <div className="welcome-container">
            <h5>Добро пожаловать</h5>
            <div className="wearth-block">
                <p>Лучшее время для бега:</p>
                <p>15:00 - 17:00</p>
                <p>24C, 2 m/s</p>
            </div>
        </div>
    );
}

export default WeatherWelcomeContainer;