import React from 'react';
import {Avatar, Card, CardContent, Typography, Button, ButtonGroup} from '@mui/material';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import PersonIcon from '@mui/icons-material/Person';
import "./Profile.css";

const UserProfile = () => {
    const buttons = [
        <Button key="one" size="large" className="button" startIcon={<PersonIcon className="button-icon" />}>
            Профиль
        </Button>,
        <Button key="two" size="large" className="button" startIcon={<TuneRoundedIcon className="button-icon" />}>
            Настройки времени
        </Button>,
        <Button key="three" size="large" className="button"  startIcon={<EmojiEventsRoundedIcon className="button-icon" />}>
            Статистика
        </Button>,
    ];


    return (
        <React.Fragment>
            <Card className="card-up">
                <CardContent className="card-contentUp">
                    <Avatar className="avatar" alt="Avatar" src="../../static/images/monkeAvatar.jpg" />
                    <Typography variant="h5" component="div" mt={2} color="white">
                        Лучший дизайнер
                    </Typography>
                </CardContent>
            </Card>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card className="card-down">
                    <CardContent className="card-contentDown">
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
