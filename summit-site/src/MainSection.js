import { Box, Button, Card, Grid, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import SwipeableViews from 'react-swipeable-views-react-18-fix'
import { v4 as uuidv4 } from 'uuid'
import cardSets from './MainSectionContent.json'

const MainSection = () => {
    const [step, setStep] = useState(0)

    const ref = useRef(null)
    const executeScroll = () => ref.current.scrollIntoView()

    const handleButtonClick = (currentStep) => {
        setStep(currentStep)
        executeScroll()
    }

    const handleSwipe = (current, prev, meta) => {
        console.log(current, prev, meta)
        if (meta.reason === 'swipe') {
            setStep(current)
        }
    }

    return (
        <Box>
            <Box
                display="flex"
                justifyContent="space-around"
                m={2}
                marginBottom="30px"
            >
                <Button
                    variant="contained"
                    onClick={() => handleButtonClick(0)}
                    style={{
                        backgroundColor: step === 0 ? '#F2695D' : '#253D88',
                        outline: 'none',
                        boxShadow: 'none',
                    }}
                >
                    JAN 30
                </Button>
                <Button
                    variant="contained"
                    onClick={() => handleButtonClick(1)}
                    style={{
                        backgroundColor: step === 1 ? '#F2695D' : '#253D88',
                        outline: 'none',
                        boxShadow: 'none',
                    }}
                >
                    JAN 31
                </Button>
                <Button
                    variant="contained"
                    onClick={() => handleButtonClick(2)}
                    style={{
                        backgroundColor: step === 2 ? '#F2695D' : '#253D88',
                        outline: 'none',
                        boxShadow: 'none',
                    }}
                >
                    FEB 1
                </Button>
            </Box>
            <SwipeableViews
                enableMouseEvents
                index={step}
                onChangeIndex={(current, prev, meta) =>
                    handleSwipe(current, prev, meta)
                }
            >
                {cardSets.map((cardSet) => (
                    <Box key={uuidv4()} overflow="auto" height="60vh">
                        <Grid
                            ref={ref}
                            container
                            spacing={3}
                            style={{ flex: 1, alignItems: 'stretch' }}
                        >
                            {cardSet.map((card) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={3}
                                    key={uuidv4()}
                                >
                                    <Card
                                        variant="outlined"
                                        style={{
                                            backgroundColor: card.color,

                                            borderRadius: '12px',
                                            maxWidth: '95%',
                                            margin: '0 auto',
                                            height: '100%',
                                            border: '1px solid #CAC4D0',
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            component="div"
                                            p={2}
                                        >
                                            {card.time} - {card.title}
                                        </Typography>

                                        {card.description && (
                                            <Typography
                                                variant="body2"
                                                component="div"
                                                p={2}
                                                style={{
                                                    backgroundColor: '#fff',
                                                }}
                                            >
                                                {card.description}
                                            </Typography>
                                        )}
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))}
            </SwipeableViews>
        </Box>
    )
}

export default MainSection
