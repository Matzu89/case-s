import { CardContent, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { Draggable } from "react-beautiful-dnd";
import { Appointment, KnowledgeLevel } from "../shared";

import { knowledgeLevelToString } from "../utils";

import WarningIcon from "@material-ui/icons/Warning";

interface IAppointment {
  appointment: Appointment;
  index: number;
  columnKnowledge?: KnowledgeLevel;
}

const AppointmentCard = ({
  appointment,
  index,
  columnKnowledge,
}: IAppointment) => {
  const showLowKnowledgeLevelWarning: boolean =
    columnKnowledge !== undefined &&
    columnKnowledge < appointment.knowledgeLevel;

  return (
    <Draggable draggableId={appointment.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          style={{ ...provided.draggableProps.style, marginBottom: "1rem" }}
        >
          <Card>
            <CardContent>
              <Typography variant="body1">
                <strong>{appointment.clientName}</strong>
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginTop: "1rem",
                }}
              >
                <Typography variant="caption">
                  {appointment.activity}
                </Typography>
                <Typography variant="caption">
                  {knowledgeLevelToString(appointment.knowledgeLevel)}
                </Typography>
                <Typography variant="caption">
                  {appointment.duration} minutes
                </Typography>
              </div>

              {showLowKnowledgeLevelWarning && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",                  
                    marginTop: "1rem",
                  }}
                >
                  <WarningIcon color="error" />
                  <Typography variant="body1" color="error">
                    Onvoldoende kennis
                  </Typography>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default AppointmentCard;
