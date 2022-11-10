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
import ReviewUpdate from './components/ReviewUpdate/ReviewUpdate';
import MyServices from './MySevices/MyServices';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <HomePage></HomePage> },
        { path: '/', element: <HomePage></HomePage> },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/login', element: <Login></Login> },
        { path: '/register', element: <Register></Register> },
        { path: '/addservices', element: <PrivetRouter><MyServices></MyServices></PrivetRouter> },
        { path: '/myreview', element: <PrivetRouter><MyReviews></MyReviews></PrivetRouter> },
        {
          path: '/services',
          element: <ServicesPage></ServicesPage>,
          loader: () => fetch('https://app-server-tau.vercel.app/services')
        },
        {
          path: '/updatedata/:id',
          element: <ReviewUpdate></ReviewUpdate>,
          // loader: ({ params }) => fetch(`https://app-server-tau.vercel.app/review?id=${params.id}`) 
        },
        {
          path: '/services/:id',
          element: <ServicesDetails></ServicesDetails>,
          loader: ({ params }) => fetch(`https://app-server-tau.vercel.app/services/${params.id}`)
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
