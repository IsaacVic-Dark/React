import React from 'react'
import { ACTIONS } from './ToDoListComponent'

function Todo({ todo,dispatch }) {
    return (
        <div className="todo" >
            <div style={{color : todo.complete ? " rgb(7, 245, 7)" : "#fff"}} className="todo__title">{todo.name}</div>
            <div className="todo__buttons">
                                {/* //add functionality to  dispatch toggle todo function and delete todo*/}
                <button className="todo__toggle" onClick= {() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>
                    Toggle
                </button>
                {/* //add functionality to  dispatch delete function and delete todo*/}
                <button className="todo__delete"onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id}})}>
                    Delete
                </button>
            </div>

            

            
        </div>
    )
}

export default Todo;