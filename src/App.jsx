import About from "./Components/About"
import HomePage from "./Components/HomePage"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index='/HomePage' element={<HomePage />} />
      <Route path='/HomePage' element={<HomePage />} />
      <Route path='/About' element={<About />} />
      
    </>
  )
)

;

function App() {

  return (
    <div >
     
      <RouterProvider router={router} />
      
    </div>
  )
}

export default App
