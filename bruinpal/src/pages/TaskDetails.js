import React from "react";
import Navbar from "../components/Navbar";

function TaskDetails() {
  return (
    <React.Fragment>
      <Navbar />
      <h1 className="comingSoon">(Task Details page)Coming Soon!</h1>
      //TODO route, big heading, task publisher, location/time/money, task description
      //TODO make publisher able to edit task description with Markdown
      //https://github.com/NevenLeung/write-down/blob/master/docs/README-zh.md
    </React.Fragment>
  );
}

export default TaskDetails;
