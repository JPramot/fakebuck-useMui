import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Checkbox,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { red } from "@mui/material/colors";
import React, { useState } from "react";

function Post() {
  const [like, setLike] = useState(false);
  return (
    <Card>
      {/* Section-1:Header */}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Pavit Pimchanagul"
        subheader="January 10, 2024"
      />
      {/* Section-2:Media */}
      <CardMedia
        component="img"
        height="500"
        image="https://images.unsplash.com/photo-1682685796186-1bb4a5655653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Paella dish"
      />
      {/* Section-3:Content */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          สู้เขาดิวะ อิหญิง!!!!
        </Typography>
      </CardContent>

      {/* Section-4:Action */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            checked={like}
            onChange={() => setLike(!like)}
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
