import './App.css';
import { Container } from "react-bootstrap";
import AddTodo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';


function App() {
  return (

    <Container className='py-3'>
      <AddTodo />
      <DisplayTodo />
    </Container>
  );
}

export default App;
