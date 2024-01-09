import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Home, Storefront, People, DarkMode } from "@mui/icons-material";
import Switch from "@mui/material/Switch";

const Wrapper = styled(Box)(({ theme }) => {
  return {
    // backgroundColor: theme.palette.secondary.main
    flex: 1,
    padding: "10px",
    // px: "10px",
    // py: "20px",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  };
});

function Sidebar() {
  return (
    <Wrapper>
      <Box styled={{ position: "fixed" }}>
        <nav>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home Page" />
              </ListItemButton>
            </ListItem>
            {/* shop */}
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary="Shop" />
              </ListItemButton>
            </ListItem>
            {/* people */}
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <People />
                </ListItemIcon>
                <ListItemText primary="Friend" />
              </ListItemButton>
            </ListItem>
            {/* dark */}
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <DarkMode />
                </ListItemIcon>
                <Switch />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Wrapper>
  );
}

export default Sidebar;
