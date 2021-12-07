import { Card, CardContent, CardHeader } from "@material-ui/core";
import { Appointment, KnowledgeLevel } from "../shared";
import { knowledgeLevelToString } from "../utils";
import AppointmentCard from "./AppointmentCard";

interface IRouteColumn {
    name: string,
    knowledgeLevel: KnowledgeLevel,
    appointments: Appointment[]
}

const RouteColumn = ({ name, knowledgeLevel, appointments }: IRouteColumn) => {
    return (
        <Card>
            <CardHeader title={name} subheader={knowledgeLevelToString(knowledgeLevel)} />
            <CardContent style={{ maxHeight: '600px', overflowY: 'scroll'}}>
                {appointments.map(x => <AppointmentCard appointment={x} key={x.id} />)}
            </CardContent>
        </Card>
    );
}

export default RouteColumn;