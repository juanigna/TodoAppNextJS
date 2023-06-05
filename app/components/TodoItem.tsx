'use client'

import React, { useTransition } from 'react'
import { Todo } from '../interfaces/todo'
import { updateTodoAction } from '../_actions';

const TodoItem = ({todo}: {todo: Todo}) => {

    const [isPending, startTransition] = useTransition();

  return (
    <li className='flex items-center gap-3 w-full'>
        <input className='w-4 cursor-pointer rounded peer' 
               id={todo.id} 
               type='checkbox' 
               defaultChecked={todo.isCompleted}
               onChange={e => startTransition(() => updateTodoAction(todo.id, e.target.checked))}
               />
        <label className='peer-checked:line-through'>{todo.title}</label>
        <span className='peer-checked:line-through'>
            {todo.updatedAt.toUTCString()}
        </span>
    </li>
  )
}

export default TodoItem