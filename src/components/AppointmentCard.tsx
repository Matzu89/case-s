import { CardActionArea, CardActions, CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Activity, Appointment, KnowledgeLevel } from "../shared";

interface IAppointment {
  appointment: Appointment;
}

const AppointmentCard = ({ appointment }: IAppointment) => {
  return (
    <Card>
      <CardHeader title={appointment.activity} />
      <CardContent>
        <p>Test</p>

        <p>Duratie: {appointment.duration}</p>

        <p>Level: {appointment.knowledgeLevel}</p>
      </CardContent>
    </Card>
  );
};

AppointmentCard.KnowledgeLevelToString = (level: KnowledgeLevel): string => {
  switch (level) {
    case KnowledgeLevel.HIGH:
      return "High";

    case KnowledgeLevel.MEDIUM:
      return "Medium";

    case KnowledgeLevel.LOW:
      return "Low";

    default:
      return "Unknown Knowledge Level";
  }
};

AppointmentCard.FakeAppointment = (): Appointment => {
  return {
    clientName: "Client",
    duration: 100,
    activity: Activity.PV,
    knowledgeLevel: KnowledgeLevel.HIGH,
  };
};

export default AppointmentCard;
