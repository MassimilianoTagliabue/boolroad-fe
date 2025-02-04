import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import HomePage from "./pages/Homepage"
import SingleTravel from "./pages/SingleTravel"
import CreaViaggio from "./pages/CreaViaggio"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/travel">
              <Route path=":id" element={<SingleTravel />} />
            </Route>
          
          {/* Nuova rotta per creare un viaggio */}
          <Route path="/crea-viaggio" element={<CreaViaggio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
