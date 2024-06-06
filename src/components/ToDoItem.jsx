import React, { useState } from "react";

function ToDoItem(props) {
  const [isCompeleted,setIsCompeleted] = useState(false);

  return (
    <div>
      <li onClick={() => setIsCompeleted(!isCompeleted)} className={isCompeleted? "completed" : ""}>
        {props.text} 
        <button className="delete" onClick={() => {
        props.onDelete(props.id);
      }}>
        Delete
        </button></li>
    </div>
  );
}
// 15+20+30 = 1
export default ToDoItem;
