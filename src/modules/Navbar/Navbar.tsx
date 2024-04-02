import { AppBar, Avatar, Box, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemText, Menu, Toolbar, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import React, { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {

    const menus = ["About Me", "Resume"];

    const menulist = <List component="a" sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }
    }}>
        {menus.map((menu) => (
            <ListItem key={menu}>
                <ListItemText primary={menu} />
            </ListItem>
        ))}
    </List>

    const [openDrawer, setOpenDrawer] = useState(false);

    const Drawerlist = (
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenDrawer(false)}>
            {menulist}
        </Box>
    );

    const onMenuClick = () => {
        setOpenDrawer(true);
    };

    return (<Box>
        <AppBar position="static">
            <Toolbar>
                <Grid container spacing={1}>
                    <IconButton sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <MenuIcon onClick={onMenuClick} />
                    </IconButton>
                    <Drawer variant="temporary"
                        open={openDrawer}
                        onClose={() => setOpenDrawer(false)}
                        ModalProps={{ keepMounted: true }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "10rem" },
                        }}
                    >
                        {Drawerlist}
                    </Drawer>
                    <Grid item sm={8}>
                        <Typography sx={{ typography: { xs: 'h6', sm: 'h4' } }}>
                            Sarbesh Kumar Sarkar
                        </Typography>
                    </Grid>
                    <Divider />
                    <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {menulist}
                    </Grid>
                    <Grid item sm={1}>
                        <Avatar alt="Sarbesh" src="/assets/images/sarbesh.jpeg" />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </Box>);
}