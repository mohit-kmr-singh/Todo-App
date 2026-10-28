import { TodoItem } from "./TodoItem";

const todoStorage = [{id: 1, work: `Buy Milf`, date: `26-oct-2026`},
                     {id: 2, work: `Buy Milf`, date: `26-oct-2026`},
                     {id: 3, work: `Buy Milf`, date: `26-oct-2026`},
                    ]; 

function showTodo() {
     return todoStorage.map(({id, work, date})=>{
            return <TodoItem key={id} id={id} work={work} date={date} />;
        })
}

// function addTodo(id, work, date) {
//     todoStorage.push({id, work, date});
// }


export const TodoItems = () => {
    return showTodo();               
} 