import React, { useState } from 'react'
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

const RightDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }
        setIsOpen(open)
    }

    const list = () => (
        <div
            role="button"
            tabIndex={0}
            aria-label="open drawer"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{ width: 250 }}
        >
            <List>
                <ListItem style={{ justifyContent: 'flex-end' }} key="Agenda">
                    <Button
                        component={Link}
                        to="/agenda"
                        style={{
                            justifyContent: 'flex-end',
                            width: '100%',
                            textAlign: 'right',
                        }}
                    >
                        <ListItemText
                            primary="Agenda"
                            primaryTypographyProps={{ fontSize: '40px' }}
                            style={{ textAlign: 'right', color: 'black' }}
                        />
                    </Button>
                </ListItem>
                <ListItem style={{ justifyContent: 'flex-end' }} key="Guests">
                    <Button
                        component={Link}
                        to="/guests"
                        style={{ justifyContent: 'flex-end', width: '100%' }}
                    >
                        <ListItemText
                            primary="Guests"
                            primaryTypographyProps={{ fontSize: '40px' }}
                            style={{ textAlign: 'right', color: 'black' }}
                        />
                    </Button>
                </ListItem>
                <ListItem style={{ justifyContent: 'flex-end' }} key="Contact">
                    <Button
                        component={Link}
                        to="/contact"
                        style={{ justifyContent: 'flex-end', width: '100%' }}
                    >
                        <ListItemText
                            primary="Contact"
                            primaryTypographyProps={{ fontSize: '40px' }}
                            style={{ textAlign: 'right', color: 'black' }}
                        />
                    </Button>
                </ListItem>
            </List>
        </div>
    )

    return (
        <div
            style={{
                position: 'fixed',
                right: 0,
                top: 90,
                backgroundColor: '#B8D98C',
                borderRadius: '20px 0 0 20px',
                color: 'black',
                zIndex: '1',
            }}
        >
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon fontSize="Medium" />
            </IconButton>
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    style: {
                        backgroundColor: '#B8D98C',
                    },
                }}
            >
                {list()}
            </Drawer>
        </div>
    )
}

export default RightDrawer
