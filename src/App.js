import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Add } from "./components/Add";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";
import { TodaysWod } from "./pages/TodaysWod";
import { Favorites } from "./pages/Favorites";
import { useState } from "react";
import { RightBar } from "./components/RightBar";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <BrowserRouter>
          <NavBar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar setMode={setMode} mode={mode} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todays-wod" element={<TodaysWod />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
            <RightBar />
            <Add />
          </Stack>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
