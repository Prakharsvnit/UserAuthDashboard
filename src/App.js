import React from "react";
import { Box } from "@mui/material";
import RegisterForm from "./components/Forms/RegisterForm";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <RegisterForm />
      </Box>
    </div>
  );
}

export default App;
