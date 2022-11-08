import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './LayOut/Main';
import HomePage from './components/HomePage/HomePage';
import Blog from './components/BlogPage/Blog';
import Register from './components/RegisterPage/Register';
import Login from './components/Login/Login';
import ServicesPage from './components/ServicesPage/ServicesPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <HomePage></HomePage> },
        { path: '/', element: <HomePage></HomePage> },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/login', element: <Login></Login> },
        { path: '/register', element: <Register></Register> },
        { path: '/services',
         element: <ServicesPage></ServicesPage> , 
         loader:()=> fetch('http://localhost:5000/services')},
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
