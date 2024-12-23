import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] ">
        <div className="AddTodo">
          <h2 className="text-lg font-bold ">Add a Todo</h2>
        </div>

        <input type="text" />
        <button>Add</button>
        <h2 className="text-lg font-bold  ">Your Todos</h2>
       
        <div className="todos">
          <div className="todo flex">
            <div className="text"> Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
              <div className="buttons">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default App;