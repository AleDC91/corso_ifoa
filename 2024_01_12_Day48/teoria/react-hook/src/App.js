import './App.css';
import { Container } from 'react-bootstrap'
import { EventComponent, StateComponent, HookComponent } from './components'; 
import JsonPlaceholderComponent from './esercizio/JsonPlaceholderComponent';

function App() {
  return (
    <Container>
      {/* <EventComponent />
      <StateComponent /> 
      <HookComponent />*/}
      <JsonPlaceholderComponent />
    </Container>
  );
}

export default App;