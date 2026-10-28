import './Button.css'

export const Button = ({type, onClick}) => {
     if(type===`green`) return <button className="button btn-solid btn-styled theme-success" onClick={onClick}>Add</button>;
     else return <button className="button btn-solid btn-styled theme-danger" onClick={onClick}>Delete</button>;
}