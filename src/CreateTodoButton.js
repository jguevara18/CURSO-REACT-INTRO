import './CreateTodoButton.css';

function CreateTodoButton(){
    return (
      <button className="CreateTodoButton" 
      onClick={(event) => console.log('le diste click', event, event.target)}>
        +
      </button>
    )};

export { CreateTodoButton };