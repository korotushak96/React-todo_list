import React from 'react';
import ToDoListItem from '../toDoList-item/toDoList-item';
import ('./toDoList.css');

const ToDoList = ({todos, onDeleted, onToggleDone, onToggleImportant}) =>{
    const list = todos.map((item)=>{
        const {id, ...props} = item;

        return (<li key = {id} className="list-group-item">
            <ToDoListItem {...props}
            onDeleted={() =>{onDeleted(id)}}
            onToggleDone={()=>{onToggleDone(id)}} 
            onToggleImportant={()=>{onToggleImportant(id)}}/>
        </li>)
    })
    return (
        <ul className="list-group todo-list">
            {list}
           
        </ul>
    )
};

export default ToDoList;