import { Box, Typography } from "@mui/material";
import React from "react";
import { Post } from "./Post";

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Typography variant="h6" fontWeight={100} marginLeft={5}>
        Latest from Crossfit HQ
      </Typography>
      <Post
        date={"August 11th, 2022"}
        image={"./220811-th4-site-1024x576.jpeg"}
        workout={`3 rounds for time of:
        800-m run
        50 wall-ball shots
        30 toes-to-bars

        ♀ 14-lb ball to 9-ft target
        ♂ 20-lb ball to 10-ft target

        Post time to comments.

        Scaling:
        Newer athletes should reduce the overall volume of this workout. Intermediate athletes can do this workout as prescribed, with a 30-minute time cap.

        Beginner Option:
        3 rounds for time of:
        400-m run
        25 wall-ball shots
        15 hanging knee raises

        ♀ 6-lb ball ♂ 10-lb ball`}
      />
      <Post
        date={"August 10th, 2022"}
        image={"./WOD-Demo-220810_TH.jpeg"}
        workout={`CrossFit Total

        Back squat, 1 rep
        Shoulder press, 1 rep
        Deadlift, 1 rep

        Post loads to comments.
        Compare to 211228.

        Scaling:
        Newer athletes should treat today as an opportunity to practice and get comfortable with heavy lifts. Intermediate athletes should attempt max-effort lifts for each movement.

        Beginner Option:
        Back squat 3-3-1-1 reps
        Shoulder press 3-3-1-1 reps
        Deadlift 3-3-1-1 reps`}
      />
      <Post
        date={"August 11th, 2022"}
        image={"./220811-th4-site-1024x576.jpeg"}
        workout={`3 rounds for time of:
        800-m run
        50 wall-ball shots
        30 toes-to-bars

        ♀ 14-lb ball to 9-ft target
        ♂ 20-lb ball to 10-ft target

        Post time to comments.

        Scaling:
        Newer athletes should reduce the overall volume of this workout. Intermediate athletes can do this workout as prescribed, with a 30-minute time cap.

        Beginner Option:
        3 rounds for time of:
        400-m run
        25 wall-ball shots
        15 hanging knee raises

        ♀ 6-lb ball ♂ 10-lb ball`}
      />
      <Post
        date={"August 10th, 2022"}
        image={"./WOD-Demo-220810_TH.jpeg"}
        workout={`CrossFit Total

        Back squat, 1 rep
        Shoulder press, 1 rep
        Deadlift, 1 rep

        Post loads to comments.
        Compare to 211228.

        Scaling:
        Newer athletes should treat today as an opportunity to practice and get comfortable with heavy lifts. Intermediate athletes should attempt max-effort lifts for each movement.

        Beginner Option:
        Back squat 3-3-1-1 reps
        Shoulder press 3-3-1-1 reps
        Deadlift 3-3-1-1 reps`}
      />
      <Post
        date={"August 11th, 2022"}
        image={"./220811-th4-site-1024x576.jpeg"}
        workout={`3 rounds for time of:
        800-m run
        50 wall-ball shots
        30 toes-to-bars

        ♀ 14-lb ball to 9-ft target
        ♂ 20-lb ball to 10-ft target

        Post time to comments.

        Scaling:
        Newer athletes should reduce the overall volume of this workout. Intermediate athletes can do this workout as prescribed, with a 30-minute time cap.

        Beginner Option:
        3 rounds for time of:
        400-m run
        25 wall-ball shots
        15 hanging knee raises

        ♀ 6-lb ball ♂ 10-lb ball`}
      />
      <Post
        date={"August 10th, 2022"}
        image={"./WOD-Demo-220810_TH.jpeg"}
        workout={`CrossFit Total

        Back squat, 1 rep
        Shoulder press, 1 rep
        Deadlift, 1 rep

        Post loads to comments.
        Compare to 211228.

        Scaling:
        Newer athletes should treat today as an opportunity to practice and get comfortable with heavy lifts. Intermediate athletes should attempt max-effort lifts for each movement.

        Beginner Option:
        Back squat 3-3-1-1 reps
        Shoulder press 3-3-1-1 reps
        Deadlift 3-3-1-1 reps`}
      />
    </Box>
  );
};
