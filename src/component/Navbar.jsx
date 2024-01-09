// Layout
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

//Component
import AppBar from "@mui/material/AppBar";
import { Typography, IconButton, Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import NotificationIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Box
          sx={{
            display: "flex",
            px: 4,
            py: 1,
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ flexGrow: 1 }} component="h1" variant="h6">
            Fakebuck
          </Typography>
          <Stack direction="row" gap={1}>
            <IconButton sx={{ display: { xs: "none", md: "block" } }}>
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton sx={{ display: { xs: "none", md: "block" } }}>
              <Badge badgeContent={4} color="error">
                <NotificationIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Avatar
                alt="John Doe"
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </IconButton>
          </Stack>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Navbar;
