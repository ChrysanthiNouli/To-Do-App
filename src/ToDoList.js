import ToDoItem from "./ToDoItem";

function ToDoList({ toDoArr, deleteToDoItem, statusCheck, editToDoItem }) {
    return (
        <div className="cardDiv">
            {toDoArr.map(toDo => ( 
                <ToDoItem key={toDo.id} toDoObj={toDo} deleteToDoItem={deleteToDoItem} statusCheck={statusCheck} editToDoItem={editToDoItem}/>
            ))}
        </div>
    );
}

export default ToDoList;