import { Button, Box, Container, Stack } from "@mui/material";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
import Rightbar from "./component/Rightbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" gap={1}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
