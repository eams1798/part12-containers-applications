import React from 'react'

const DoneInfo = (todo, onClickDelete) => (
  <>
    <span>This todo is done</span>
    <span>
      <button onClick={() => onClickDelete(todo)}> Delete </button>
    </span>
  </>
)

const NotDoneInfo = (todo, onClickDelete, onClickComplete) => (
  <>
    <span>
      This todo is not done
    </span>
    <span>
      <button onClick={() => onClickDelete(todo)}> Delete </button>
      <button onClick={() => onClickComplete(todo)}> Set as done </button>
    </span>
  </>
)

const Todo = ({ todo, onClickDelete, onClickComplete }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
    <span>
      {todo.text} 
    </span>
    {todo.done ?
      <DoneInfo todo={todo} onClickDelete={onClickDelete} />:
      <NotDoneInfo todo={todo} onClickDelete={onClickDelete} onClickComplete={onClickComplete} />}
  </div>
)

export default Todo