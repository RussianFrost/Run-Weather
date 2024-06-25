import React from 'react';
import {Avatar, Card, CardContent, Typography, Button, ButtonGroup} from '@mui/material';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import PersonIcon from '@mui/icons-material/Person';
import "./UserProfile.css";

const UserProfile = () => {
    const buttons = [
        <Button key="one" size="large" className="profile-button" startIcon={<PersonIcon className="button-icon" />}>
            Профиль
        </Button>,
        <Button key="two" size="large" className="profile-button" startIcon={<TuneRoundedIcon className="button-icon" />}>
            Настройки времени
        </Button>,
        <Button key="three" size="large" className="profile-button" startIcon={<EmojiEventsRoundedIcon className="button-icon" />}>
            Статистика
        </Button>,
    ];


    return (
        <React.Fragment>
            <Card className="profile-header">
                <CardContent className="header-content">
                    <Avatar className="avatar" alt="Avatar" src="../../static/images/monkeAvatar.jpg" />
                    <Typography variant="h5" component="div" mt={2} color="white">
                        Лучший дизайнер
                    </Typography>
                </CardContent>
            </Card>
            <div className="container">
                <Card className="profile-menu">
                    <CardContent className="profile-menu-content">
                        <ButtonGroup
                            orientation="vertical"
                            aria-label="Vertical button group"
                            variant="text"
                        >
                            {buttons}
                        </ButtonGroup>
                    </CardContent>
                </Card>
            </div>
        </React.Fragment>
    );
};

export default UserProfile;
