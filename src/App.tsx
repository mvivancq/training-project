//import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import LoginForm from './pages/LoginForm';
import Counter from './pages/Counter3';
import TodoList from './pages/TodoList';

const router = createBrowserRouter([
  {
    path: '/todo',
    element: (
      <TodoList />
    ) 
  },
  {
    path: '/logIn',
    element: (
      <LoginForm />
    ) 
  },
  {
    path: '/counter',
    element: (
      <Counter />
    ) 
  },
]);

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
      {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}
    </>
  )
}

export default App

