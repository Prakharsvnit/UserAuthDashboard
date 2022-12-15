import React from 'react';
import { Box } from "@mui/material";
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex", flexDirection: "row",justifyContent:'space-between' }}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
