//import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import LoginForm from './pages/LoginForm';
import Counter from './pages/Counter3';
import SignInForm from './pages/SignIn';
import DebouncedSearch from './pages/DebouncedFilter';
import GithubProfile from './pages/GithubProfile';
import Gallery from './pages/Gallery';
import SquareSet from './pages/SquareSet';

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
    path: '/gallery',
    element: (
      <Gallery />
    ) 
  },
  {
    path: '/interview',
    element: (
      <SquareSet />
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

