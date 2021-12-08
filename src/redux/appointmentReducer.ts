import { Appointment, AppointmentRoute, KnowledgeLevel } from "../shared";
import { createAppointmentList, createAppointmentRouteList } from "../utils";

export interface AppointmentState {
  unassigned: Appointment[];
  routes: AppointmentRoute[];
}

const initialState: AppointmentState = {
  unassigned: createAppointmentList(KnowledgeLevel.HIGH, 5),
  routes: createAppointmentRouteList()
};

export interface IAssignActionPayload {
  appointmentId: string;
  routeId: string;
  destinationIndex: number;
  currentRouteId?: string;
}

export type AssignAction = { type: "ASSIGN"; payload: IAssignActionPayload };


export const appointmentReducer = (
  state: AppointmentState = initialState,
  action: AssignAction
) => {
  switch (action.type) {
    case "ASSIGN": {
        const { routeId, appointmentId, currentRouteId, destinationIndex } = action.payload;
        
        const appointment = currentRouteId !== undefined && currentRouteId !== "unassigned" ? state.routes.filter(r => r.id === currentRouteId).flatMap(r => r.appointments).filter(
            (x) => x.id === appointmentId
          )[0] : state.unassigned.filter(
            (x) => x.id === action.payload.appointmentId
          )[0];        
          
        if (!appointment) {
            return state;
        }

        const unassigned = state.unassigned.filter(
            (x) => x.id !== action.payload.appointmentId
          );

        const routes = state.routes.map(r => { 
            
            if (r.id === action.payload.routeId) {
                const appointments = r.appointments.filter(a=> a.id !== appointment.id)
                appointments.splice(destinationIndex, 0, appointment);
                return {
                    ...r,
                    appointments
                }
            }

            if (r.id === currentRouteId && r.id !== routeId) {
                return {
                    ...r,
                    appointments: r.appointments.filter(a => a.id !== appointment.id)
                }
            }

            return r;
        });

        console.log({ routes });

      return {
        ...state,
        unassigned,
        routes
      };
    }
    default:
      return state;
  }
};
