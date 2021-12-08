import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { AppointmentsTool } from "./components/AppointmentsTool/AppointmentsTool";

function App() {
  return (
    <>
    <AppBar>
      <Toolbar>
        <Container maxWidth="xl">
          <Typography variant="h5">Afspraakkaartjes</Typography>          
        </Container>
      </Toolbar>      
    </AppBar>
    <Container maxWidth="xl" style={{ marginTop: '90px' }}>
      <AppointmentsTool />
    </Container>
    </>
  );
}

export default App;
