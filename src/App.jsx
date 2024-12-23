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
          <h2 className="text-lg font-bold my-5 ">Add a Todo</h2>
        </div>

        <input type="text" className="w-80 rounded-md" />
        <button className="bg-violet-800 hover:bg-violet-600 p-3 py-1 rounded-md mx-6 font-bold text-white ">
          Add
        </button>
        <h2 className="text-lg font-bold  ">Your Todos</h2>

        <div className="todos">
          <div className="todo flex">
            <div className="text">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </div>
            <div className="buttons">
              <button className="bg-violet-800 hover:bg-violet-600 p-3 py-1 rounded-md mx-1 font-bold text-white ">
                Edit
              </button>
              <button className="bg-violet-800 hover:bg-violet-600 p-3 py-1 rounded-md mx-1 font-bold text-white ">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
