import { CardContent, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Draggable } from "react-beautiful-dnd";
import { Provider } from "react-redux";
import { Activity, Appointment, KnowledgeLevel } from "../shared";

import { knowledgeLevelToString } from "../utils";

interface IAppointment {
  appointment: Appointment;
  index: number;
  columnKnowledge?: KnowledgeLevel
}

const AppointmentCard = ({ appointment, index, columnKnowledge }: IAppointment) => {
  const showLowKnowledgeLevelWarning : boolean = columnKnowledge !== undefined && columnKnowledge < appointment.knowledgeLevel;

  return (
    <Draggable draggableId={appointment.id} index={index}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} style={{ ...provided.draggableProps.style, marginBottom: '1rem'}}>
        <Card>
          <CardContent>
            {showLowKnowledgeLevelWarning && "Let op"}
            <Typography variant="body1">
              <strong>{appointment.clientName}</strong>
            </Typography>

            <p>Duratie: {appointment.duration}</p>

            <p>Level: {knowledgeLevelToString(appointment.knowledgeLevel)}</p>
          </CardContent>
        </Card>
        </div>
      )}
    </Draggable>
  );
};

export default AppointmentCard;
