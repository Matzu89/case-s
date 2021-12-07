import React from 'react';
import AppointmentCard from './components/AppointmentCard';

function App() {
  return (
    <AppointmentCard appointment={AppointmentCard.FakeAppointment()} />
  );
}

export default App;


