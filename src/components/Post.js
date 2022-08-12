import React, { useState } from "react";
import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  styled,
  Typography,
} from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Post = ({ date, image, workout }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "black", color: "white" }}
            aria-label="workout"
          >
            CF
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="WORKOUT OF THE DAY"
        subheader={date}
      />
      <CardMedia component="img" image={image} alt="wod" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Today's daily CrossFit workout.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{workout}</Typography>
          {/* <Typography paragraph>800-m run</Typography>
          <Typography paragraph>50 wall-ball shots</Typography>
          <Typography paragraph>30 toes-to-bars</Typography>
          <Typography paragraph>Scaling:</Typography>
          <Typography paragraph>
            Newer athletes should reduce the overall volume of this workout.
            Intermediate athletes can do this workout as prescribed, with a
            30-minute time cap.
          </Typography>
          <Typography paragraph>
            Beginner Option: 3 rounds for time of:
          </Typography>
          <Typography paragraph>400-m run</Typography>
          <Typography paragraph>25 wall-ball shots</Typography>
          <Typography paragraph>15 hanging knee raises</Typography>
          <Typography paragraph>♀ 6-lb ball ♂ 10-lb ball</Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
};
