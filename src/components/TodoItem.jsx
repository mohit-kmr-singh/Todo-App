import { Button } from './Button'
import './TodoItem.css'

export const TodoItem = ({id, work, date}) => {

    const deleteHandler = () => {
        console.log(`Trying to delete ${id} ${work}`);
    }

    return (
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="row">
                  {work}
              </div>
            </div>
            <div className="col">
              <div className="row">
                  {date}
              </div>
            </div>
            <div className="col">
                  <Button type="red" onClick={deleteHandler} />
            </div>
          </div>
        </div>
    )
}