import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [count, setCount] = useState(0);
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  const handleEdit = () => {
   
  };

  const handleDelete = (e,id) => {
    console.log(`THe id is ${id}`);
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
   
    settodos(newTodos);
    
  };
  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
    console.log(todos);
  };
  const handleChange = (e) => {
    settodo(e.target.value);
  };
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] ">
        <div className="AddTodo">
          <h2 className="text-lg font-bold my-5 ">Add a Todo</h2>
        </div>

        <input
          onChange={handleChange}
          value={todo}
          type="text"
          className="w-80 rounded-md"
        />
        <button
          onClick={handleAdd}
          className="bg-violet-800 hover:bg-violet-600 p-3 py-1 rounded-md mx-6 font-bold text-white "
        >
          Add
        </button>
        <h2 className="text-lg font-bold  ">Your Todos</h2>

        <div className="todos">
          {todos.map((item) => {
            return (
              <div key={item.id} className="todo flex w-1/2 justify-between my-3">
                <input
                  onChange={handleCheckbox}
                  type="checkbox"
                  value={item.isCompleted}
                  name={item.id}
                  id=""
                />
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}{" "}
                </div>
                <div className="buttons">
                  <button
                    onClick={handleEdit}
                    className="bg-violet-800 hover:bg-violet-600 p-3 py-1 rounded-md mx-1 font-bold text-white "
                  >
                    Edit
                  </button>
                  <button 
                    onClick={(e)=>{handleDelete(e,item.id)}}
                    className="bg-violet-800 hover:bg-violet-600 p-3 py-1 rounded-md mx-1 font-bold text-white "
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
