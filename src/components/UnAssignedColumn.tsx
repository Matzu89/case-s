import { Card, CardContent, CardHeader } from "@material-ui/core";
import { Droppable } from "react-beautiful-dnd";
import { Appointment, AppointmentRoute } from "../shared";
import { getTotalDuration } from "../utils";
import AppointmentCard from "./AppointmentCard";

export const UnAssignedColumn = ({ unassigned }: { unassigned: Appointment[] }) => {
  const totalDuration = getTotalDuration(unassigned);

  return (
    <Card>
      <CardHeader title={"Afspraakkaartjes"} subheader={`${totalDuration} minutes`} />
      <CardContent
        style={{ maxHeight: "calc(100vh - 225px)", minHeight: "calc(100vh - 225px)", overflowY: "scroll" }}
      >
        <Droppable droppableId={"unassigned"} type="APPOINTMENT">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{
                backgroundColor: snapshot.isDraggingOver ? "blue" : "white",
                height: "100%"
              }}
              {...provided.droppableProps}
            >
              {unassigned.map((x, idx) => (
                <AppointmentCard appointment={x} key={x.id} index={idx} />
              ))}
               <div style={{ padding: "0.25rem 0"}}>
              {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </CardContent>
    </Card>
  );
};
