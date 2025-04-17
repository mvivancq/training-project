import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

interface Task {
    id: string,
    desc: string,
    completed: boolean,
}

const TodoList: React.FC = () => {
    const [todo, setTodo] = useState<Task []>([]);
    const [filter, setFilter] = useState('all');
    const [input, setInput] = useState('');
    const filteredTodo = todo.filter((task) => {
        if(filter === 'all')
            return true;
        else if(filter === 'pending')
            return !task.completed;
        else if(filter === 'completed')
            return task.completed;
    });

    const addTask = () => {
        setTodo(() => {
            const list = [...todo, {id: uuid(), desc: input, completed: false}]
            return list;
        });
        setInput('');
    }

    const completeTask = (completed: boolean, id: string) => {
        setTodo(() => {
            const list = todo.map((task) => task.id === id ? {...task, completed} : {...task})
            return list;
        });
    }

    const deleteTask = (id: string) => {
        setTodo(() => {
            const list = todo.filter((task) => task.id !== id);
            return list;
        });
    }

    const filterTasks = (status: string) => {
        setFilter(status);
    }

    return(
        <div>
            <h2>Todo List</h2>
            <label>Task: </label>
            <input onChange={(e) => setInput(e.target.value.trim())} value={input} type="text"/>
            <button onClick={addTask}>Add Task</button>
            <br/>
            <br/>
            <button onClick={() => filterTasks('all')}>All</button>
            <button onClick={() => filterTasks('pending')}>Pending</button>
            <button onClick={() => filterTasks('completed')}>Completed</button>
            <br/>
            <ul>
                {filteredTodo.map((task) => (
                    <li key={task.id} style={{ 
                        listStyleType: "none",
                    }}>
                        <input type="checkbox" checked={task.completed} onChange={(e) => completeTask(e.target.checked, task.id)} />
                        {task.desc}
                        <button onClick={() => deleteTask(task.id)}>d</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;