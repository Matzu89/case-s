import { Appointment, AppointmentRoute, KnowledgeLevel } from "../shared";
import { createAppointmentList, createAppointmentRouteList } from "../utils";

export interface AppointmentState {
  unassigned: Appointment[];
  routes: AppointmentRoute[];
}

const initialState: AppointmentState = {
  unassigned: createAppointmentList(KnowledgeLevel.HIGH, 10),
  routes: createAppointmentRouteList()
};

export interface IAssignActionPayload {
  appointmentId: string;
  routeId: string;
  currentRouteId?: string;
}

type AssignAction = { type: "ASSIGN"; payload: IAssignActionPayload };

interface IUnassignActionPayload {
    appointmentId: string;
    routeId: string;
    currentRouteId?: string;
  }

type UnAssignAction = { type: "UNASSIGN", payload: IUnassignActionPayload };



export const appointmentReducer = (
  state: AppointmentState = initialState,
  action: AssignAction
) => {
  switch (action.type) {
    case "ASSIGN": {
      return {
        ...state,
        unassigned: state.unassigned.filter(
          (x) => x.id !== action.payload.appointmentId
        ),
      };
    }
    default:
      return state;
  }
};
