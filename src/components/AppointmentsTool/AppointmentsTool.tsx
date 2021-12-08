import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { AppointmentState } from "../../redux/appointmentReducer";
import { AppointmentRoute } from "../../shared";
import RouteColumn from "../RouteColumn";
import UnAssignedColumn from "../UnAssignedColumn";

export const AppointmentsTool = () => {
  const routes = useSelector<AppointmentState, AppointmentState["routes"]>(
    (state) => state.routes
  );

  const unassigned = useSelector<AppointmentState, AppointmentState["unassigned"]>(
    (state) => state.unassigned
  );

  return (
    <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
            <UnAssignedColumn unassigned={unassigned} />
        </Grid>
        {routes.map(x => <AppointmentsTool.Route route={x} key={x.id} />)}        
    </Grid>
  );
};

AppointmentsTool.Route = ({ route } : { route: AppointmentRoute }) => {
    return (
        <Grid item xs={4} md={3}>
            <RouteColumn route={route} />
        </Grid>
      );
}
