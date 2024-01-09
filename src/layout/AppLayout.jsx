import { Button, Box, Container, Stack } from "@mui/material";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <Box>
      <Navbar />
      {/* Outlet จะเป็น UI ของ Children Route (Nested Toute) */}
      <Outlet />
    </Box>
  );
}

export default AppLayout;
