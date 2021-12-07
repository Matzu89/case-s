import { CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Activity, Appointment, KnowledgeLevel } from "../shared";

import { knowledgeLevelToString } from "../utils";

interface IAppointment {
  appointment: Appointment;
}

const AppointmentCard = ({ appointment }: IAppointment) => {
  return (
    <Card>
      <CardHeader title={appointment.activity} />
      <CardContent>
        <strong>{appointment.clientName}</strong>

        <p>Duratie: {appointment.duration}</p>

        <p>Level: {knowledgeLevelToString(appointment.knowledgeLevel)}</p>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
