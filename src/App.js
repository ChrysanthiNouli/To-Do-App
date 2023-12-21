import { useState } from "react";
import AddToDoItem from "./AddToDoItem";
import ToDoList from "./ToDoList";
import "./style.css";

function App() {
  const [toDoArr, setToDoArr] = useState([]);

  const AddNewToDo = (toDoItem) => {
    let newToDo = {
        value: toDoItem,
        status: "",
        id: Date.now(),
    };
      if (newToDo.value === "") {
        alert("You haven't entered any task.");
      } else {
        setToDoArr([...toDoArr, newToDo]);
      }
  };

  const deleteToDoItem = (id) => {
    if (window.confirm("Delete task?")) {
      setToDoArr(
        toDoArr.filter((toDo) => {
          return toDo.id !== id;
        })
      );
    }
  };

function statusCheck(id) {
  setToDoArr(
    toDoArr.map((toDoObj) => {
      if (id === toDoObj.id) {
        return {
          ...toDoObj, status: toDoObj.status === "incomplete"? "completed" : "incomplete",
        };
      } else {
      return toDoObj;
    }
    })
  );
}

function editToDoItem(id) {
  let newValue = prompt("Edit your task:");
    setToDoArr(toDoArr.map((toDoObj) => {
      if (id === toDoObj.id && newValue!== "") {
        return { ...toDoObj, value:newValue};
      } else {
        return toDoObj;
      }
    })
    );
}

  return (
    
    <div>
      <h1 className="h1">To Do List</h1>
      <AddToDoItem AddNewToDo={AddNewToDo} />
      <ToDoList toDoArr={toDoArr} deleteToDoItem={deleteToDoItem} statusCheck={statusCheck} editToDoItem={editToDoItem} />
    </div>
  );

}

export default App;