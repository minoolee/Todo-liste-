
import React, { useState } from 'react'
import './App.css';
import InputFeild from './components/InputFeild';
import {Todo} from "./components/models"

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handeleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if(todo) {
      setTodos([...todos,{ id: Date.now(),todo, isDone:false}])
      setTodo("")
    }
  }
  return (
    <div className="App">
    <span>Taskify</span>
    <InputFeild todo={todo} setTodo={setTodo} handeleAdd={handeleAdd}/>
    </div>
  );
}

export default App;
