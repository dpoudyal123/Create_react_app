import React from "react";
import { Box } from "@material-ui/core/";
import Icons from "./Icons";

function Header({ title }) {
  const headerStyle = {
    textAlign: "left",
    width: "100%",
  };

  return (
    <div style={headerStyle}>
      <Box display="flex" p={1} bgcolor="rgb(102, 102, 255)">
        <Box flexGrow={1} bgcolor="rgb(102, 102, 255)">
          {title}
        </Box>
        <Icons logo="search" />
        <Icons logo="get_app" />
      </Box>
    </div>
  );
}

export default Header;
