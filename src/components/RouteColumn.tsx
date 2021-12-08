import { Card, CardContent, CardHeader } from "@material-ui/core";
import { Droppable } from "react-beautiful-dnd";
import { AppointmentRoute } from "../shared";
import { knowledgeLevelToString } from "../utils";
import AppointmentCard from "./AppointmentCard";

interface IRouteColumn {
  route: AppointmentRoute;
}

const RouteColumn = ({ route }: IRouteColumn) => {
  const { id, name, knowledgeLevel, appointments } = route;
  return (
    <Card>
      <CardHeader
        title={name}
        subheader={knowledgeLevelToString(knowledgeLevel)}
      />
      <CardContent
        style={{ maxHeight: "calc(100vh - 225px)", minHeight: "calc(100vh - 225px)", overflowY: "scroll" }}
      >
        {" "}
        <Droppable droppableId={id} type="APPOINTMENT">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}              
              style={{
                backgroundColor: snapshot.isDraggingOver ? "blue" : "white",
                height: "100%"
              }}
              {...provided.droppableProps}
            >
              {appointments.map((x, idx) => (
                <AppointmentCard appointment={x} key={x.id} index={idx} columnKnowledge={knowledgeLevel} />
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

export default RouteColumn;
