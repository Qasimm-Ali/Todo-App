export default function TodoLists({ item, ind, Todo , setTodo }) {
    const handleDelete = (event) => {
        const UpdatedArr = Todo.filter((_ , i) => i !== event)
        setTodo(UpdatedArr)

    }
  return (
    <>
      <div key={ind} className="relative w-[20rem] h-[10rem] border-[2.5px]  border-purple-600 rounded-md overflow-hidden overflow-y-auto  ">
        {item}
        <button  className="bg-purple-400 text-white w-[3.5rem] h-[2.1rem] font-medium   rounded-md  hover:bg-purple-500 absolute bottom-1 right-2 " onClick={() =>handleDelete(ind)}>
          delete
        </button>
      </div>
    </>
  );
}
