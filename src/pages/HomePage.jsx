import { Button, Box, Container, Stack } from "@mui/material";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import Feed from "../component/Feed";
import Rightbar from "../component/Rightbar";

function HomePage() {
  return (
    // ไปอยู่ใน AppLayout ใช้ Neaster Route ช่วยรัน
    // <Box>
    //   <Navbar />
    <Stack direction="row" gap={1}>
      <Sidebar />
      <Feed />
      <Rightbar />
    </Stack>
    // </Box>
  );
}

export default HomePage;
