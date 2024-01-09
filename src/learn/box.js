import { Button, Box } from "@mui/material";

function App() {
  return (
    <Box
      component="main"
      sx={{
        p: 2,
        border: "1px dashed grey",
        "&:hover": {
          bgcolor: "red",
        },
      }}
      height={500}
      width={200}
      bgcolor="wheat"
      my={4}
      mx={4}
      display="flex"
      gap={4}
      alignItems="center"
    >
      <Button variant="contained">Hello MUI</Button>
      <Button variant="contained">Hello MUI</Button>
    </Box>
  );
}

export default App;
