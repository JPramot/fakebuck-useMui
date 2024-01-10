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
import { Link } from "react-router-dom";
// Link ไปทันที

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
            <Link to="/">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary="Home Page" />
                </ListItemButton>
              </ListItem>
            </Link>
            {/* shop */}
            <Link to="/">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Storefront />
                  </ListItemIcon>
                  <ListItemText primary="Shop" />
                </ListItemButton>
              </ListItem>
            </Link>
            {/* people */}
            <Link to="/friend/79">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <People />
                  </ListItemIcon>
                  <ListItemText primary="Friend" />
                </ListItemButton>
              </ListItem>
            </Link>
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
