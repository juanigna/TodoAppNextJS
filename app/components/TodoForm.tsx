'use client'

import React, { useRef } from 'react'
import { addTodoAction } from '../_actions'

const TodoForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    async function action(data:FormData) {
        const title = data.get('title')

        if(!title || typeof title !== 'string') return
        
        await addTodoAction(title)
        formRef.current?.reset();
    }

    return (
        <form ref={formRef} action={action} className='flex flex-col items-center justify-center gap-2'>
            <h2>Create todo!</h2>
            <div className='flex items-center justify-center gap-2'>
                <input className="input" type='text' name='title'/>
                <button type='submit' className='btn'>Create!</button>
            </div>
        </form>
    )
}

export default TodoForm