import React from "react";
import { Icon } from "@material-ui/core";

function Icons({ logo }) {
  return (
    <div>
      <Icon onClick={() => console.log(`${logo} clicked`)}>{logo}</Icon>
    </div>
  );
}

export default Icons;
