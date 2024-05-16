import React from 'react';
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreateSchedule from './pages/CreateSchedule';
import Profile from './pages/Profile';

const RouterPanel = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/create-schedule">Create</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </nav>

                <Routes path="/" exact component={Home} />
                <Routes path="/create-schedule" component={CreateSchedule} />
                <Routes path="/profile" component={Profile} />
            </div>
        </Router>
    );
};

export default RouterPanel;
