import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './LayOut/Main';
import HomePage from './components/HomePage/HomePage';
import Blog from './components/BlogPage/Blog';
import Register from './components/RegisterPage/Register';
import Login from './components/Login/Login';
import ServicesPage from './components/ServicesPage/ServicesPage';
import ServicesDetails from './components/ServicesPage/ServicesDetails';
import MyReviews from './components/MyReview/MyReview';
import PrivetRouter from './PrivetRouter/PrivetRouter';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <HomePage></HomePage> },
        { path: '/', element: <HomePage></HomePage> },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/login', element: <Login></Login> },
        { path: '/register', element: <Register></Register> },
        { path: '/myreview', element: <PrivetRouter><MyReviews></MyReviews></PrivetRouter> },
        {
          path: '/services',
          element: <ServicesPage></ServicesPage>,
          loader: () => fetch('http://localhost:5000/services')
        },
        {
          path: '/services/:id',
          element: <ServicesDetails></ServicesDetails>,
          loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
        },
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
