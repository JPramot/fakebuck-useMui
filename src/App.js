import { Button, Box, Container } from "@mui/material";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
import Rightbar from "./component/Rightbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Sidebar />
      <Feed />
      <Rightbar />
    </Box>
  );
}

export default App;
