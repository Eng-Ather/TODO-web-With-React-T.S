import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Button, Input } from 'antd'


function App() {

  const [todo, setTodo] = useState<string>(''); //string type useState for input
  const [allTodos, setAllTodos] = useState<string[]>([]) //Array type useState to store all todos
  const [completedTodos, setCompletedTodos] = useState<string[]>([]) //Array type useState to store all todos

  // console.log(todo);

  //___________________ function to delete single TODO from assign task list ______________
  const deleteTodo = (index: number) => {
    const updatedTodos = [...allTodos]; //passing all element fron stat to an array in order to apply array method
    updatedTodos.splice(index, 1);  // Remove the todo at the specified index
    setAllTodos(updatedTodos);    // Update the state with the new array
    // console.log(allTodos);

  }

  //________function to pass single TODO from assign task list to completed task list______
  const doneTodo = (doneTodoindex: number) => {
    const markTodo = allTodos[doneTodoindex]; // Get the todo to be completed
    setCompletedTodos([...completedTodos, markTodo]); // Add the completed todo

    const updatedTodos = [...allTodos]; //passing all element from stat to an array in order to apply array method
    updatedTodos.splice(doneTodoindex, 1);  // Remove the todo at the specified index
    setAllTodos(updatedTodos);    // Update the state with the new array
    // console.log(completedTodos);

  };

  //____________ function to delete single TODO from complete task list __________________
  const removeTodo = (index: number) => {
    const updatedCompletedTaskList = [...completedTodos]; //passing all element fron stat to an array in order to apply array method
    updatedCompletedTaskList.splice(index, 1);  // Remove the todo at the specified index
    setCompletedTodos(updatedCompletedTaskList);    // Update the state with the new array
    // console.log(completedTodos);
  }


  return (
    <>
      {/* logo images */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://ant.design/" target="_blank">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFMkgc-3Ic_ulT8KOXJCkvQeLLUlgo9TpOg&s" className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Main Heading */}
      <h1>TODO APP </h1> <h3> React.tsx + Vite + Antd </h3>

      {/* Todo Input Bar */}
      <div>
        <div className='input_baar'>
          <Input
            type='text'
            placeholder='Add TODO'
            maxLength={25}
            style={{ border: '2px solid green' }}
            value={todo}
            onChange={(e) => { setTodo((e.target as HTMLInputElement).value); }}
          />
         
          <Button type='primary'
            style={{ backgroundColor: "green", margin: '3px', padding: "5px" }}
            onClick={() => {
              if (todo.trim()) {
                setAllTodos([...allTodos, todo]);
                setTodo('');
              } else {
                alert('Please enter a todo!');
              }
            }}
          >
            ADD TODO
          </Button>
        </div>

        {/* Display Box */}
        <div className='displayBox'>
          {/* ____________ Display all Add todos ______________ */}
          <div style={{ borderBottom: '2px solid green' }} >
            <ul>
              <h2>Assign Task</h2>
              {allTodos.map((data, index) =>
              (<li>{`${index + 1} ${data}`}

                <div>
                  <Button
                    type='primary'
                    style={{ backgroundColor: " red" }}
                    onClick={() => deleteTodo(index)} >
                    Delete
                  </Button>

                  <Button
                    type='primary'
                    style={{ backgroundColor: " rgb(34, 93, 182)" }}
                    onClick={() => doneTodo(index)} >
                    Done
                  </Button>
                </div>

              </li>))
              }
            </ul>

            {/*  Delete all Add todos */}
            <Button type='primary'
              style={{ backgroundColor: 'red', width: '98%', marginTop: '5px', marginBottom: '5px', letterSpacing: '15px', fontWeight: "bold" }}
              onClick={() => setAllTodos([])}
            >CLEAR ALL</Button>
          </div>

          {/* ______________________ completed todos _________________________ */}
          <div style={{ borderBottom: "2px solid green" }}>
            <ul>
              <h2 style={{color:"rgb(34, 93, 182)"}}>Completed Task</h2>
              {completedTodos.map((data, index) =>
              (<li style={{ backgroundColor: "rgb(34, 93, 182)" }}> {`${index + 1} ${data}`}

                <Button
                  type='primary'
                  style={{ backgroundColor: " red" }}
                  onClick={() => removeTodo(index)} >
                  Delete
                </Button>

              </li>))
              }
            </ul>

            {/* ____________ Delete all completed todos ______________ */}
            <Button type='primary'
              style={{ backgroundColor: 'red', width: '98%', margin: '5px', letterSpacing: '15px', fontWeight: "bold" }}
              onClick={() => setCompletedTodos([])}
            >Clrar All</Button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
