import './EnterTodo.css'
import { Button } from './Button'



export const EnterTodo = () => {
    const addHandler = () => {
      console.log(`Trying to add item!`);
    }

    return (
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="row">
                <input type="text" placeholder="Enter Todo" className="enter-todo"></input>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <input type="date" className='date'></input>
              </div>
            </div>
            <div className="col">
                <Button type="green" onClick={addHandler}/>
            </div>
          </div>
        </div>
    )
}