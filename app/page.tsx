import { getTodos } from '@/lib/todos'
import TodoItem from './components/TodoItem';
import { Todo } from './interfaces/todo';
import TodoForm from './components/TodoForm';

export default async function Home() {
  const {todos} = await getTodos();
  return (
    <section className='py-20'>
      <div className='container flex flex-col items-center justify-center gap-2'>
        <h1 className='w-fit bg-slate-700 font-bold text-2xl p-1 rounded-sm'>Todos</h1>
        <TodoForm />
        <h2 className='text-xl font-semibold'>Previous todos: </h2>
        <ul className='flex flex-col gap-2 max-w-[800px]'>
          {
            todos?.map((todo: Todo) => {
              return (
                <div className='w-full'>
                  <TodoItem key={todo.id} todo={todo}/>
                </div>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}
