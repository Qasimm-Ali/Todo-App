import { useRef } from "react";
import { useState } from "react";
export default function Todo() {

  const [Todo, setTodo] = useState([])
  const ref = useRef();
  const handleAdd = () => {
    let result = ref.current.value
    setTodo([...Todo , result])
  }

  return (
    <>
      <div className="text-center">
        <h1 className="font-bold text-[40px] text-purple-800">Todo App</h1>
      </div>
      <div className="text-center" >
        <input type="text" name="input" ref={ref} className="border-[1px] border-black mr-3 focus:border-[2px] rounded-md focus:border-black outline-none p-2 " />
        <button onClick={handleAdd} className="bg-purple-600 text-white w-[3.5rem] h-[2.1rem] font-medium   rounded-md  hover:bg-purple-500 ">Add</button>
      </div>
      <div>
        {Todo.map((item, ind) => (
          <li key={ind}>{item} </li>
        ))}
      </div>
    </>
  );
}
