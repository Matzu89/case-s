import { useDispatch, useSelector } from "react-redux";
import AppointmentCard from "./components/AppointmentCard";
import {
  AppointmentState,
  IAssignActionPayload,
} from "./redux/appointmentReducer";

function App() {
  const unassigned = useSelector<
    AppointmentState,
    AppointmentState["unassigned"]
  >((state) => state.unassigned);

  const dispatch = useDispatch();

  const assign = (payload: IAssignActionPayload) => {
    dispatch({ type: "ASSIGN", payload });
  };

  return (
    <>
      {unassigned.map((x) => {
        return (
          <div onClick={() => {
            assign({ appointmentId: x.id, routeId: "" })
          }}>
            <AppointmentCard appointment={x} key={x.id} />
          </div>
        );
      })}
    </>
  );
}

export default App;
