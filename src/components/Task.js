import React from "react";

function Task(props) {
   return (
      <div>
         <li>{props.text}</li>
         <button
            onClick={() => {
               props.handleDelete(props.id);
            }}
         >
            Delete
         </button>
      </div>
   );
}

export default Task;
