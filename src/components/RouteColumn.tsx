import { Card, CardContent, CardHeader } from "@material-ui/core";
import { AppointmentRoute } from "../shared";
import { knowledgeLevelToString } from "../utils";
import AppointmentCard from "./AppointmentCard";

interface IRouteColumn {
    route: AppointmentRoute
}

const RouteColumn = ({ route } : IRouteColumn) => {
    const { name, knowledgeLevel, appointments } = route;
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