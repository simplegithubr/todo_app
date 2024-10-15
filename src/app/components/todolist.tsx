'use client'

import {useState} from "react"

interface todo  {
    id: number,
    text: string,
    complete: boolean
}
const Todolist = ()=> {
const [todos, setTodos] = useState <todo[]>([])
const [inputValue, setInputvalue] = useState("")

//add of items
const addTodo = () => {
    if(inputValue.trim()=== "")return;
    setTodos([
        ...todos,
        {id: Date.now(), text: inputValue, complete: false}
    ]);
    setInputvalue("")

};
//add value id 
const toggleTodo =(id: number) => {
    setTodos(
        todos.map((todo)=>
        todo.id === id ? {...todo, completed: !todo.complete} : todo

        )
    )

};

//delet todo section 
const deletTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))

}; 
return(
    <div className="flex flex-col min-h-screen">
        <header className="bg-pink-400 text-white py-4">
            <div className="max-w-4xl ax-auto text-center">
                <h1 className="text-3xl font-serf font-bold">TodoList By Sagar Sheikh</h1>
                <p className="font-serf font-bold mt-2"> {""}
                    organize your work with our next js Todo List App</p>
            </div>
        </header>
        <main className="flex-grow flex items-center justify-center ">
          <div className="max-w-md mx-auto p-4 bg-pink-300 rounded-lg shadow-md">
            <div className="mb-4">
                <div className="flex">
                    <input type="text" value={inputValue} onChange={(e) => setInputvalue(e.target.value)}
                     className="flex-grow p-2 border border-grey-400 rounded-lg" 
                     placeholder="Add a new Task..."/>
                     <button
                     onClick={addTodo}
                     className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg havor:bg-blue-600">Add

                     </button>
                     </div>
                    </div>
    <ul className="space-y-2">
    {todos.map ((todo) =>(
        <li key={todo.id}
        className={`flex items-center justify-between p-2 border border-pink-300 
            rounded-lg ${todo.complete?
         'bg-white-300 line-through' : "bg-sky-200 "}`}>
            <span>{todo.text}</span>

    <div>
        <button 
        onClick={() => toggleTodo(todo.id)}
        className="px-2 py-1 text-sm bg-yellow-500 rounded-lg hover:bg-red-300">
        {todo.complete? "undo": "complete"}
        </button>

        <button 
        onClick={() => deletTodo(todo.id)}
        className="px-2 py-1 text-sm bg-red-500 rounded-lg hover:bg-red-300">
            Delete
       
        </button>

    </div>

        </li>
    ))}
    </ul>
          </div>
        </main>
    </div>

)

}
export default  Todolist 
