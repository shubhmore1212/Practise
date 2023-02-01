import React, { ReactElement } from "react";
import EventPageComponent from "./components";

const EventPageContainer = (): ReactElement => {
  return (
    <>
      <EventPageComponent />
    </>
  );
};

export default React.memo(EventPageContainer);
