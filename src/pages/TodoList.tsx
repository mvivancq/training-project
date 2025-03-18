import React, { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  // Aquí define tu estado y funciones
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<Todo[]>([]); 

  const addTask = () => {
    const newItem = {
        id: tasks.length,
        text: task,
        completed: false,
    }
    setTasks((tasks) => [...tasks, newItem]);
    setTask('');
  }

  const completeTask = (completed: boolean, item: Todo) => {
    const id = item.id;
    setTasks((tasks) => 
        tasks.map((task) => task.id === id ? {...task, completed} : task)
    );
  }

  return (
    <div>
      <h2>To-Do List</h2>
      <input type="text" value={task} placeholder="Task" onChange={(e) => setTask(e.target.value)}/>
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((item) => (
            <li key={item.id} 
            style={{ 
                listStyleType: "none",
                textDecoration: item.completed ? "line-through" : "none",
                color: item.completed ? "gray" : "white"
            }}>
                <input type="checkbox" checked={item.completed} onChange={(e) => completeTask(e.target.checked, item)}/>
                {item.text}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
