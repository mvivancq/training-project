import React, { useState } from "react";

type Todo = {
    id: number;
    description: string;
    state: 'pending'|'completed';
}

const TodoList: React.FC = () => {
    const [todo, setTodo] = useState<Todo[]>([]);
    const [todoFilter, setTodoFilter] = useState<Todo[]>([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        const myTask: Todo = {
            id: Date.now(),
            description: task,
            state: 'pending'
        }
        setTodo((todo) => {
            const list = [...todo, myTask];
            setTodoFilter(list)
            return list;
        })
    }

    const completeTask = (state: boolean, element: Todo) => {
        setTodo((todo) => todo.map((task) => {
            if(task.id === element.id){
                return {
                    ...task,
                    state: state ? 'completed' : 'pending',
                };
            }
            return task;
        }))
    }

    const filterTodos = (state?: string) => {
        console.log(state)
        if(!state){
            console.log('all')
            setTodoFilter(todo);
        }
        else{
            setTodoFilter(todo.filter((element) => element.state === state));
        }
    }

    return (
        <div>
            <label>Todo: </label>
            <input type="text" onChange={(e) => setTask(e.target.value)}/>
            <button onClick={addTask}>Add</button>
            <br/>
            <br/>
            <button onClick={() => filterTodos('')}>All</button>
            <button onClick={() => filterTodos('pending')}>Pending</button>
            <button onClick={() => filterTodos('completed')}>Completed</button>
            <br/>
            <br/>
            <ul>
                {todoFilter.map((element) => (
                    <li key={String(element.id)}
                    style={{ 
                        listStyleType: "none",
                        textDecoration: element.state === 'completed' ? "line-through" : "none",
                        color: element.state === 'completed' ? "gray" : "white"
                    }}>
                        <input type="checkbox" onChange={(e) => completeTask(e.target.checked, element)} />
                        {element.description}
                    </li>
                ))}
            </ul>
            <p>Tareas completadas {todo.filter((element) => element.state === 'completed').length}</p>
            <p>Tareas pendientes {todo.filter((element) => element.state !== 'completed').length}</p>
        </div>
    );
}

export default TodoList