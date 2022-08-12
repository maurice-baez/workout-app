import { Box, Typography } from "@mui/material";
import React from "react";

export const Favorites = () => {
  return (
    <Box flex={4} p={2}>
      <Typography variant="h6" fontWeight={100} marginLeft={5}>
        Favorited Workouts:
      </Typography>
    </Box>
  );
};
