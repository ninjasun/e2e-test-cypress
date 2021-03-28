import React from 'react'

export default props => (
  <form onSubmit={props.handleTodoSubmit}>
    <input
      type='text'
      value={props.currentTodo}
      onChange={props.handleNewTodoChange}
      className='new-todo'
      autoFocus
      placeholder='What needs to be done?'
    />
  </form>
)
