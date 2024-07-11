import { useRef } from "react";
export default function Todo() {

  const ref = useRef();
  const handleAdd = () => {
    let result = ref.current.value
    console.log(result);
  }

  return (
    <>
      <div>
        <h1>Todo App</h1>
      </div>
      <div>
        <input type="text" ref={ref} />
        <button onClick={handleAdd}>Add</button>
      </div>
    </>
  );
}
