import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  //Route,
  //Link,
} from "react-router-dom";
//==============================| Routing |==============================
import Home from './Pages/Home.tsx';
import Register from './Pages/Register.tsx';
import ErrorPage from './Pages/ErrorPage.tsx';
import SponsorSignUpPage from './Pages/SponsorSignUp.tsx';
import CodeBlackHacks from './Pages/CodeBlackHacks.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/codeblackhacks",
    element: <CodeBlackHacks />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Sponsor",
    element: <SponsorSignUpPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
//========================================================================

function App() {
  return (
    <div className="App">      
        <RouterProvider router={router} />
    </div>
  )
}

export default App
