import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/icons-material";

function Rightbar() {
  const Wrapper = styled(Box)(({ theme }) => {
    return {
      backgroundColor: "wheat",
      flex: 1,
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "block",
      },
    };
  });

  return (
    <Wrapper>
      Right
      {/* <nav>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText></ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </nav> */}
    </Wrapper>
  );
}

export default Rightbar;
