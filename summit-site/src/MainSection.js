import React, { useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";

function MainSection() {
  const cardSets = {
    "JAN 30": [
      {
        title: "Opening Remarks",
        time: "9:00 AM",
        speaker: "Jane Doe",
        description: "Introduction to the summit themes and objectives.",
        color: "#FFD700",
      },
      // ... more agenda items for JAN 30
    ],
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
      </Box>
      <Box overflow="auto" height="560px">
        <Grid container spacing={3}>
          {activeCards.map((card, index) => (
            <Grid item xs={12} key={index}>
              <Card
                variant="outlined"
                style={{
                  backgroundColor: card.color,
                  borderRadius: "12px",
                  maxWidth: "370px",
                  margin: "0 auto",
                  maxHeight: "150px",
                }}
              >
                <Typography variant="h6" component="div" p={2}>
                  {card.time} - {card.title}
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
