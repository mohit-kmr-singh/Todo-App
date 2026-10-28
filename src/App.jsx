import { Title } from "./components/Title"
import { TodoItems } from "./components/TodoItems"
import { EnterTodo } from "./components/EnterTodo"

function App() {
  return (
    <>
        <center>
          <Title text="Todo-APP"/>  
          <EnterTodo />
          <TodoItems />   
        </center>
        
    </>
  )
}

export default App
