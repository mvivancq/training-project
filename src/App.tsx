//import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import LoginForm from './pages/LoginForm';
import Counter from './pages/Counter3';
import SignInForm from './pages/SignIn';
import DebouncedSearch from './pages/DebouncedFilter';
import GithubProfile from './pages/GithubProfile';
import TodoList from './pages/TodoList3';

const router = createBrowserRouter([
  {
    path: '/signIn',
    element: (
      <SignInForm name='Mart' />
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
  {
    path: '/debouncedFilter',
    element: (
      <DebouncedSearch />
    ) 
  },
  {
    path: '/commits',
    element: (
      <GithubProfile />
    ) 
  },
  {
    path: '/todo',
    element: (
      <TodoList />
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

