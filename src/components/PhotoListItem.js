import { ImageListItem } from "@mui/material";
import React from "react";

export const PhotoListItem = ({ imageUrl, alt }) => {
  return (
    <ImageListItem>
      <img src={imageUrl} alt={alt} />
    </ImageListItem>
  );
};
