import { ITodo } from './interfaces';
import React, {useState} from 'react';
import { NavBar } from './components/NavBar';
import { ToDoForm } from './components/ToDoForm';
import { ToDoList } from './components/ToDoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandle = (title: string) => {
    const newTodo:ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }

    //setTodos([newTodo, ...todos]) затрет старый стейт лучший вариант ниже
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm("Delete TODO?")
    if (shouldRemove) {
      setTodos(prev => todos.filter(todo => todo.id !== id))
    }
  }

  return (
    <>
      <NavBar />
      <div className='container'>
        <ToDoForm onAdd={addHandle} />
        <ToDoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
      </div>
    </>
  )
}

export default App;
