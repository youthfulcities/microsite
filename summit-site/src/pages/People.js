import React, { useState } from 'react'
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Collapse,
    CardActionArea,
    IconButton,
} from '@mui/material'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LinkIcon from '@mui/icons-material/Link'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import PeopleData from '../data/PeopleData.json'

const Guests = () => {
    const [expanded, setExpanded] = useState(null)

    const handleExpandClick = (name) => {
        setExpanded(expanded === name ? null : name)
    }

    const people = PeopleData

    return (
        <Box>
            <div style={{ margin: '20px' }}>
                <Typography variant="subtitle1" gutterBottom>
                    VANCOUVER URBAN WORK SUMMIT
                </Typography>
                <Typography variant="h3" gutterBottom>
                    People
                </Typography>
            </div>
            <div style={{ maxHeight: '72vh', overflowY: 'auto' }}>
                {people.map((guest) => (
                    <Card
                        key={guest.name}
                        style={{ margin: '30px', borderRadius: '10px' }}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="50%"
                                image={`./${guest.image}`}
                                alt={guest.name}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {guest.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {guest.title}
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Box
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Box>
                                        <a
                                            href={guest.Linkedin}
                                            target="LinkedIn Profile"
                                            rel="noopener noreferrer"
                                        >
                                            <IconButton aria-label="LinkedIn Icon">
                                                <LinkedInIcon />
                                            </IconButton>
                                        </a>
                                        <a
                                            href={guest.Website}
                                            target="Website Link"
                                            rel="noopener noreferrer"
                                        >
                                            <IconButton aria-label="Link Icon">
                                                <LinkIcon />
                                            </IconButton>
                                        </a>
                                    </Box>
                                    <IconButton
                                        aria-label="Arrow Icon"
                                        onClick={() =>
                                            handleExpandClick(guest.name)
                                        }
                                    >
                                        <KeyboardArrowDownSharpIcon fontSize='large' />
                                    </IconButton>
                                </Box>
                            </CardContent>
                            <Collapse
                                in={expanded === guest.name}
                                timeout="auto"
                                unmountOnExit
                            >
                                <CardContent>
                                    <Typography paragraph>
                                        {guest.bio}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </Box>
    )
}

export default Guests
