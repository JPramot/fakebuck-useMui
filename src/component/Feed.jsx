import styled from "@emotion/styled";
import React from "react";
import { Box, Button } from "@mui/material";
import Post from "./Post";
import { Stack } from "@mui/material";
import CreatePost from "./CreatePost";

const Wrapper = styled(Box)(({ theme }) => ({
  // background: 'green',
  flex: 2,
}));

function Feed() {
  return (
    <Wrapper>
      <Stack gap={4}>
        <CreatePost />
        <Post />
        <Post />
        <Post />
      </Stack>
    </Wrapper>
  );
}

export default Feed;
