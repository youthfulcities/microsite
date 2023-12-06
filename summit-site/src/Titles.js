import React from "react";
import { Typography } from "@mui/material";

function Header() {
  return (
    <div style={{ margin: "20px", marginBottom: "40px" }}>
      <Typography variant="subtitle1" gutterBottom>
        VANCOUVER URBAN WORK SUMMIT
      </Typography>
      <Typography variant="h3" gutterBottom>
        AGENDA
      </Typography>
    </div>
  );
}

export default Header;
