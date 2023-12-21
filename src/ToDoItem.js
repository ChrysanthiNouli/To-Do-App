function ToDoItem({ toDoObj, deleteToDoItem, statusCheck, editToDoItem }) {
    function handleDelete(toDoId) {
        deleteToDoItem(toDoId);
    }

    function handleStatus(toDoId) {
        statusCheck(toDoId);
    }

    function handleEdit(toDoId) {
        editToDoItem(toDoId);
    }

    return (
        <div className="toDoItemDiv">
            <input type="checkbox" onChange={() => handleStatus(toDoObj.id)}/>
            <span className={toDoObj.status==="incomplete"?"completed":"incomplete"}>{toDoObj.value}</span>
            <button onClick={() => handleEdit(toDoObj.id)} className="editBtn">Edit</button>
            <button onClick={() => handleDelete(toDoObj.id)} className="deleteBtn">Delete</button>
        </div>
    );
}

export default ToDoItem;