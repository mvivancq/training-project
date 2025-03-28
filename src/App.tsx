//import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import LoginForm from './pages/LoginForm';
import Counter from './pages/Counter3';
import SignInForm from './pages/SignIn';
import SearchFilter from './pages/SearchFilter';
import DebouncedSearch from './pages/DebouncedFilter';

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
    path: '/searchFilter',
    element: (
      <SearchFilter />
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

