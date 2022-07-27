import React from "react";
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Icon from '@mui/material/Icon';

import { useNavigate } from "react-router-dom";

import { mainNavbarItems } from "./const/navbarItems";
// import { blue } from "@mui/material/colors";


const Navbar = () =>{
    const navigate = useNavigate();
    // const params = useParams();

    const drawerWidth = 300;
    return(
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,            
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                backgroundColor: '#101f33',
                color:'#fff'
            },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>
            {mainNavbarItems.map((item, index) => (
                <ListItem key={item.id} disablePadding onClick={() => navigate(item.route)}>
                <ListItemButton>
                    <ListItemIcon sx={{color:'#fff'}}>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
            
        </Drawer>
    )
}

export default Navbar; 