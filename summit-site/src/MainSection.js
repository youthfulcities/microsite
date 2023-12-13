import React, { useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";

function MainSection() {
  const cardSets = {
    //DAY 1
    "JAN 30": [
      {
        title: "Breakfast / Check-In",
        time: "8:00 AM",
        description: "Come down to the Centre for Dialogue for free breakfast and check-in to get your badges ahead of the Summit.",
        color: "#F6D9D7",
      },
      {
        title: "Welcome Presentation",
        time: "9:00 AM",
        speaker: "Jane Doe",
        description: "Land acknowledgement with Name Lastname, as well as opening remarks from Youthful Cities co-founder, Robert Barnard.",
        color: "#F6D9D7",
      },
      {
        title: 'Navigating the Work Ecosystem',
        time: '9:30 AM',
        speaker: 'John Smith, Jane Doe, George Ball',
        description: 'Join our panel discussion on the work ecosystem',
        color: '#B8D98D'
      },
      {
        title: 'Speed Bingo Fun!',
        time: '10:30 AM',
        description: 'Test your knowledge on topics of Urban Work!',
        color: '#F6D9D7'
      },
      {
        title: 'Coffee Break',
        time: '11:00 AM',
        color: '#FBD166'
      },
      {
        title: 'Where are we AT today? Part 1 - Workshop',
        time: '11:15 AM',
        speaker: 'John Smith',
        description: 'A data-driven workshop utilizes pre-summit information and resources for collaborative group work, defining the current state of work and opportunities.',
        color: '#F2695D'
      },
      {
        title: 'Lunch Break',
        time: '12:30 AM',
        color: '#FBD166'
      },
      {
        title: 'Attractions in Cities',
        time: '1:30 PM',
        speaker: 'John Smith, Jane Doe, George Ball',
        description: 'Panel discussion on the 5 main attractions in cities',
        color: '#B8D98D'
      },
      {
        title: 'Coffee Break',
        time: '2:30 PM',
        color: '#FBD166'
      },
      {
        title: 'Where are we AT? Part 1 - Presentations',
        time: '3:00 PM',
        speaker: 'John Smith',
        description: 'Present as a group your findings during the earlier workshop on where the city is AT today',
        color: '#F2695D'
      },
      {
        title: 'Where are we AT? Part 2 - Workshop',
        time: '3:30 PM',
        speaker: 'John Smith',
        description: 'Present as a group your findings during the earlier workshop on where the city is AT today',
        color: '#F2695D'
      },
      {
        title: 'Where are we AT? Part 2 - Presentations',
        time: '4:30 PM',
        speaker: 'John Smith',
        description: 'Present as a group your findings during the earlier workshop on where the city is AT today',
        color: '#F2695D'
      },
      {
        title: 'Where are we AT? - Wrap Up',
        time: '5:00 PM',
        speaker: 'John Smith',
        description: 'Present as a group your findings during the earlier workshop on where the city is AT today',
        color: '#F2695D'
      },
      {
        title: 'End of Day 1 Wrap Up',
        time: '5:15 PM',
        speaker: 'John Smith',
        description: 'Present as a group your findings during the earlier workshop on where the city is AT today',
        color: '#F6D9D7'
      },
      {
        title: 'Dinner & Arts Presentation',
        time: '6:00 PM',
        color: '#FBD166'
      },
    ],
    //DAY 2
    "JAN 31": [
      {
        title: "Panel Discussion: Future of Tech",
        time: "10:00 AM",
        speaker: "John Smith, Emily Johnson",
        description: "A discussion on the future trends in technology.",
        color: "#7FFFD4",
      },
      // ... more agenda items for JAN 31
    ],
    //DAY 3
    "FEB 1": [
      {
        title: "Workshop on AI Ethics",
        time: "2:00 PM",
        speaker: "Michael Brown",

        color: "#FF69B4",
      },

      {
        title: "Workshop on AI Ethics",
        time: "2:00 PM",
        speaker: "Michael Brown",
        description: "Interactive workshop on ethical considerations in AI.",
        color: "#FF69B4",
      },
      {
        title: "Workshop on AI Ethics",
        time: "2:00 PM",
        speaker: "Michael Brown",
        description: "Interactive workshop on ethical considerations in AI.",
        color: "#FF69B4",
      },
      {
        title: "Workshop on AI Ethics",
        time: "2:00 PM",
        speaker: "Michael Brown",
        description: "Interactive workshop on ethical considerations in AI.",
        color: "#FF69B4",
      },
      {
        title: "Workshop on AI Ethics",
        time: "2:00 PM",
        speaker: "Michael Brown",
        description: "Interactive workshop on ethical considerations in AI.",
        color: "#FF69B4",
      },
      {
        title: "Workshop on AI Ethics",
        time: "2:00 PM",
        speaker: "Michael Brown",

        color: "#FF69B4",
      },
      // ... more agenda items for FEB 1
    ],
  };

  const [activeCards, setActiveCards] = useState(cardSets["JAN 30"]);
  const [activeButton, setActiveButton] = useState("JAN 30");


  const handleButtonClick = (date) => {
    setActiveCards(cardSets[date]);
    setActiveButton(date);
  };

 
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-around"
        m={2}
        marginBottom={"30px"}
      >
        <Button
          variant="contained"
          onClick={() => handleButtonClick("JAN 30")}
          style={{
            backgroundColor: activeButton === "JAN 30" ? "#F2695D" : "#253D88",
            outline: "none",
            boxShadow: "none",
            
            
          }}
        >
          JAN 30
        </Button>
        <Button
          variant="contained"
          onClick={() => handleButtonClick("JAN 31")}
          style={{
            backgroundColor: activeButton === "JAN 31" ? "#F2695D" : "#253D88",
            outline: "none",
            boxShadow: "none",
          }}
        >
          JAN 31
        </Button>
        <Button
          variant="contained"
          onClick={() => handleButtonClick("FEB 1")}
          style={{
            backgroundColor: activeButton === "FEB 1" ? "#F2695D" : "#253D88",
            outline: "none",
            boxShadow: "none",
          }}
        >
          FEB 1
        </Button>
      </Box >
      <Box overflow="auto" height="60vh" >
        <Grid container spacing={3} style={{flex: 1, alignItems: 'stretch' }}>
          {activeCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                variant="outlined"
                style={{
                  backgroundColor: card.color,
                  borderRadius: "12px",
                  maxWidth: "95%",
                  margin: "0 auto",
                  height: "100%",  
                  border: "1px solid #CAC4D0" 
                }}
              >
                <Typography variant="h6" component="div" p={2}>
                  {card.time} - {card.title}
                </Typography>
                {card.description && (
                  <Typography variant="body2" component="div" p={2} style= {{backgroundColor: "#fff"}}>
                    {card.description}
                  </Typography>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default MainSection;