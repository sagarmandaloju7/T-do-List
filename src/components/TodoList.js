import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import "../App.css";

const TodoList = (props) => {
   return (
      <ListGroup id="list_group">
         {props.todos.map((todo, index) => (
            <ListGroupItem key={index} id="flex-display">
               <div id="content">{todo}</div>
               <div id="deleteButton">
                  <AiFillDelete
                     onClick={() => props.handleDelete(index)}
                     size={35}
                  />
               </div>
            </ListGroupItem>
         ))}
      </ListGroup>
   );
};
// how can i include before pseudo element and the first element in div in react

export default TodoList;
