import { Card, CardContent, CardHeader } from "@material-ui/core";
import { Appointment, AppointmentRoute } from "../shared";
import { knowledgeLevelToString } from "../utils";
import AppointmentCard from "./AppointmentCard";

interface IRouteColumn {
    route: AppointmentRoute
}

const UnAssignedColumn = ({ unassigned } : { unassigned: Appointment[] }) => {    
    return (
        <Card>
            <CardHeader title={"Afspraakkaartjes"} subtitle={"Nog niet toegewezen"} />
            <CardContent style={{ maxHeight: "calc(100vh - 225px)", overflowY: 'scroll'}}>
                {unassigned.map(x => <AppointmentCard appointment={x} key={x.id} />)}
            </CardContent>
        </Card>
    );
}

export default UnAssignedColumn;