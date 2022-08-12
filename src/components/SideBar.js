import {
  Create,
  DarkMode,
  Favorite,
  FitnessCenter,
  HomeOutlined,
  LibraryBooks,
  PersonOutline,
  Settings,
  Shuffle,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

export const SideBar = ({ mode, setMode }) => {
  const setTheme = () => {
    const theme = mode === "light" ? "dark" : "light";
    setMode(theme);
  };
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position={"fixed"}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/todays-wod">
              <ListItemIcon>
                <FitnessCenter />
              </ListItemIcon>
              <ListItemText primary="Today's Workout" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/favorites">
              <ListItemIcon>
                <Favorite />
              </ListItemIcon>
              <ListItemText primary="Favorites" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#movements-library">
              <ListItemIcon>
                <LibraryBooks />
              </ListItemIcon>
              <ListItemText primary="Movements Library" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#create-a-workout">
              <ListItemIcon>
                <Create />
              </ListItemIcon>
              <ListItemText primary="Create a workout" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#wod-generator">
              <ListItemIcon>
                <Shuffle />
              </ListItemIcon>
              <ListItemText primary="WOD Generator" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <PersonOutline />
              </ListItemIcon>
              <ListItemText primary="Athlete Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
              <Switch onClick={setTheme} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
