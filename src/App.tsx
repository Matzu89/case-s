import React from "react";
import AppointmentCard from "./components/AppointmentCard";
import RouteColumn from "./components/RouteColumn";
import { KnowledgeLevel } from "./shared";
import { createAppointmentsList } from "./utils";

function App() {
  return (
    <RouteColumn
      name={"Testcolom"}
      knowledgeLevel={KnowledgeLevel.LOW}
      appointments={createAppointmentsList(KnowledgeLevel.HIGH, 100)}
    />
  );
}

export default App;
