import './App.css';
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
]);

function App() {
  return (
    <div className="App">
      <h1>Studio Ghibli</h1>
      <RouterProvider router={router} />
    
    </div>
  );
}

export default App;
