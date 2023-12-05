import React, { useState } from 'react';
import { Box, Button, Card, Grid, Typography } from '@mui/material';

function MainSection() {
  const cardSets = {
    'JAN 30': [
      { 
        title: 'Opening Remarks', 
        time: '9:00 AM', 
        speaker: 'Jane Doe', 
        description: 'Introduction to the summit themes and objectives.', 
        color: '#FFD700'
      },
      {
        title: 'Future of Work Panel #1',
        time: '9:30 AM',
        speaker: 'John Smith',
        description: 'Panel of 3 guests will be talking about the future of work',
        color: '#FFD700'
      },
      {
        title: 'Speed Bingo Fun!',
        time: '10:30 AM',
        //speaker: 'John Smith',
        description: 'Test your knowledge on topics of Urban Work',
        color: '#FFD700'
      },
      {
        title: 'Coffee Break',
        time: '11:00 AM',
        //speaker: 'John Smith',
        //description: 'Panel of 3 guests will be talking about the future of work',
        color: '#FFD700'
      },
      {
        title: 'Workshop A: Where are we at today?',
        time: '11:15 AM',
        speaker: 'John Smith',
        description: 'Workshop covering some range of topics for delegates',
        color: '#FFD700'
      },
      {
        title: 'Lunch',
        time: '12:30 AM',
        //speaker: 'John Smith',
        //description: 'Panel of 3 guests will be talking about the future of work',
        color: '#FFD700'
      },
    ],
    'JAN 31': [
      { 
        title: 'Panel Discussion: Future of Tech', 
        time: '10:00 AM', 
        speaker: 'John Smith, Emily Johnson', 
        description: 'A discussion on the future trends in technology.', 
        color: '#7FFFD4'
      },
      // ... more agenda items for JAN 31
    ],
    'FEB 1': [
      { 
        title: 'Workshop on AI Ethics', 
        time: '2:00 PM', 
        speaker: 'Michael Brown', 
        description: 'Interactive workshop on ethical considerations in AI.', 
        color: '#FF69B4'
      },

      { 
        title: 'Workshop on AI Ethics', 
        time: '2:00 PM', 
        speaker: 'Michael Brown', 
        description: 'Interactive workshop on ethical considerations in AI.', 
        color: '#FF69B4'
      },
      { 
        title: 'Workshop on AI Ethics', 
        time: '2:00 PM', 
        speaker: 'Michael Brown', 
        description: 'Interactive workshop on ethical considerations in AI.', 
        color: '#FF69B4'
      },
      { 
        title: 'Workshop on AI Ethics', 
        time: '2:00 PM', 
        speaker: 'Michael Brown', 
        description: 'Interactive workshop on ethical considerations in AI.', 
        color: '#FF69B4'
      },
      { 
        title: 'Workshop on AI Ethics', 
        time: '2:00 PM', 
        speaker: 'Michael Brown', 
        description: 'Interactive workshop on ethical considerations in AI.', 
        color: '#FF69B4'
      },
      { 
        title: 'Workshop on AI Ethics', 
        time: '2:00 PM', 
        speaker: 'Michael Brown', 
        description: 'Interactive workshop on ethical considerations in AI.', 
        color: '#FF69B4'
      },
      // ... more agenda items for FEB 1
    ],
  };

  const [activeCards, setActiveCards] = useState(cardSets['JAN 30']);

  const handleButtonClick = (date) => {
    setActiveCards(cardSets[date]);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-around" m={2}>
        <Button variant="contained" onClick={() => handleButtonClick('JAN 30')}>JAN 30</Button>
        <Button variant="contained" onClick={() => handleButtonClick('JAN 31')}>JAN 31</Button>
        <Button variant="contained" onClick={() => handleButtonClick('FEB 1')}>FEB 1</Button>
      </Box>
      <Box overflow="auto" height="400px">
        <Grid container spacing={2}>
          {activeCards.map((card, index) => (
            <Grid item xs={12} key={index}>
              <Card variant="outlined" style={{ backgroundColor: card.color }}>
                <Typography variant="h6" component="div" p={2}>
                  {card.time} - {card.title}
                </Typography>
                <Typography variant="subtitle1" component="div" p={2}>
                  Speaker: {card.speaker}
                </Typography>
                <Typography variant="body2" component="div" p={2}>
                  {card.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default MainSection;
