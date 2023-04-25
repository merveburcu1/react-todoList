import React from 'react'
import Todo from './Todo'

function TodoList({todos,setTodos,filteredTodos}) {
  return (
    <div className="todo-container">
        <ul > 
        {filteredTodos.map((todo)=>(<Todo text={todo.text} key={todo.id} todos={todos} todo={todo} setTodos={setTodos}/>))}
        
        </ul>
         
      
    </div>
  )
}

export default TodoList


