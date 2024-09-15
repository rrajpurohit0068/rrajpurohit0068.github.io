import React from "react";


import { Routes, Route } from "react-router-dom";
import { Home } from './Home';
import { Loader } from './Loader2'
import { useNavigate } from "react-router-dom";


const router = [
  {
    path: "/",
    element: <Loader />,
  },
  {
    path: "/profile",
    element: <Home />,
  },
];


export function Router({ children }) {

  return (
    <Routes>
      {router.map(({ path, element }) => {
        return <Route path={path} element={element} />;
      })}
    </Routes>
  );
}
