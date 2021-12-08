import { Grid } from "@material-ui/core";
import { useCallback } from "react";
import {
  DragDropContext,
  DragStart,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { AppointmentState, AssignAction } from "../../redux/appointmentReducer";
import { AppointmentRoute } from "../../shared";
import RouteColumn from "../RouteColumn";
import { UnAssignedColumn } from "../UnAssignedColumn";

export const AppointmentsTool = () => {
  const dispatch = useDispatch();

  const routes = useSelector<AppointmentState, AppointmentState["routes"]>(
    (state) => state.routes
  );

  const unassigned = useSelector<
    AppointmentState,
    AppointmentState["unassigned"]
  >((state) => state.unassigned);

  const onDragEnd = useCallback(
    (result: DropResult, provided: ResponderProvided) => {
      if (result.destination?.droppableId) {
        dispatch<AssignAction>({ type: "ASSIGN", payload: { appointmentId: result.draggableId, routeId: result.destination?.droppableId ?? "", currentRouteId: result.source.droppableId, destinationIndex: result.destination?.index ?? 0}})
      }
    },
    []
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <UnAssignedColumn unassigned={unassigned} />
        </Grid>
        {routes.map((x) => (
          <AppointmentsTool.Route route={x} key={x.id} />
        ))}
      </Grid>
    </DragDropContext>
  );
};

AppointmentsTool.Route = ({ route }: { route: AppointmentRoute }) => {
  return (
    <Grid item xs={4} md={3}>
      <RouteColumn route={route} />
    </Grid>
  );
};
