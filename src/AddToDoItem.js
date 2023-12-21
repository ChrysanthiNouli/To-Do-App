import { useState } from "react";
//import ToDoItem from "./ToDoItem";

function AddToDoItem({AddNewToDo}) {
    const [toDoItem, setToDoItem] = useState("");
    
    function handleClick() {
        AddNewToDo(toDoItem);
        setToDoItem("");
    }


    //A TRY TO MAKE THE "ADD" BUTTON FUNCTIONAL WHILE HITTING "ENTER"
    // function keyState (e) {
    //     AddNewToDo(toDoItem);
    //     setToDoItem("");
    //     if (e.key === "Enter") {
    //        toDoItem={value:e.target.value};
    //        console.log("enter");
    //     };
    // }

    return (
        <div className="addDiv">
            <input type="text" 
            placeholder="Tasks to do.."
            onChange={(e) => setToDoItem(e.target.value)} 
            value={toDoItem}
            />
            <button onClick={handleClick}  className="addBtn">Add Task</button>
            {/* onKeyDown={() => keyState(toDoObj.id)} */}
        </div>
    );
}
export default AddToDoItem;