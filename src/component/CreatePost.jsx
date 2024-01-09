import styled from "@emotion/styled";
import React, { useState } from "react";
import { Button, Box, Modal, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 400,
  background: "white",
  boxShadow: 24,
  padding: "20px",
  textAlign: "center",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const PostInput = styled(TextField)(({ theme }) => ({
  border: "none",
  outline: "none",
}));

function CreatePost() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <Box>
      <Button
        sx={{ width: "100%" }}
        onClick={handleOpen}
        variant="contained"
        size="large"
      >
        create post
      </Button>
      <Modal open={open} onClose={handleClose}>
        <ModalContent>
          <Typography variant="h6" component="h2">
            What's on your mind?
          </Typography>
          <PostInput
            multiline
            rows={5}
            maxRows={8}
            sx={{
              "&:focus": {
                outline: "none",
                border: "none",
              },
            }}
          />
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{ width: "100%" }}
          >
            Post
          </Button>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default CreatePost;
