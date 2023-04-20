import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import TodoList from "./TodoList";

function TodoMain() {
   const [task, setTask] = useState("");
   const [taskArray, setTaskArray] = useState([]);

   useEffect(() => {
      const initialTasks =
         JSON.parse(localStorage.getItem("todo_tasks")) || [];
      setTaskArray(initialTasks);
   }, []);

   const onTaskChange = (event) => {
      setTask(event.target.value);
   };

   const addTask = (e) => {
      e.preventDefault();

      if (task !== "") {
         setTaskArray((prevTasks) => {
            const updatedArray = [...prevTasks, task];
            localStorage.setItem(
               "todo_tasks",
               JSON.stringify(updatedArray)
            );
            return updatedArray;
         });
         setTask("");
      }
   };

   const handleDelete = (indexToBeDeleted) => {
      const newTasks = taskArray.filter(
         (_ele, index) => index !== indexToBeDeleted
      );
      setTaskArray(newTasks);
      localStorage.setItem("todo_tasks", JSON.stringify(newTasks));
   };

   return (
      <>
         <div className="container">
            <h1>My Todo List</h1>
            <Form onSubmit={addTask}>
               <Form.Group className="mb-3" controlId="formBasicTodo">
                  <textarea
                     className="form-control"
                     aria-label="With textarea"
                     value={task}
                     onChange={onTaskChange}
                     placeholder="Enter todo"
                     required
                  ></textarea>
               </Form.Group>
               <Button variant="primary" type="submit" size="md">
                  Add
               </Button>
            </Form>
         </div>
         <hr />
         <TodoList todos={taskArray} handleDelete={handleDelete} />
      </>
   );
}
export default TodoMain;
