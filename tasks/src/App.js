import logo from "./logo.svg";
import Slider from "./components/Slider.jsx";
import Movieitems from "./components/Movieitems";
import Moviesdetails from "./components/Moviesdetails";
import ErrorPage from "./components/ErrorPage";
import { v4 as uuid } from "uuid";
import "./App.css";
import Addmovie from "./components/Addmovie";
import Navbar from "./components/navbar";
import Adduser from "./components/Users/Adduser";
import Userlist from "./components/Users/UsersList";
import { createBrowserRouter, RouterProvider, router } from "react-router-dom";
import { Children, useState } from "react";
function App() {
  const [Userlistarr, setUserlist] = useState([]);
  const adduserhandler = (name, age) => {
    setUserlist((pr) => {
      return [...pr, { name, age, id: uuid() }];
    });
  };
  const incrementAge = (id) => {
    setUserlist((pr) => {
      return pr.map((user) =>
        id === user.id ? { ...user, age: Number(user.age) + 1 } : { ...user }
      );
    });
  };
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Movieitems />,
        },
        {
          path: "/Movie/:id",
          element: <Moviesdetails></Moviesdetails>,
        },
        {
          path: "/Add",
          element: <Addmovie />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>

    // {/* <Slider></Slider> */}
    // {/* <Adduser onAddUser={adduserhandler} />
    // <Userlist users={Userlistarr} onIncrementFire={incrementAge} /> */}
  );
}

export default App;
