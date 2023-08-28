import { Navigate, Route, Routes } from "react-router-dom";
import {HomePage} from './pages/HomePage/Homepage'
import {TeachersPage} from './pages/Teachers/TeachersPage'
import {FavoritePage} from './pages/Favorite/FavoritePage'
import {SharedLayout} from './components/SharedLayout/SharedLayout'
function App() {


  return (
    <>
    {/* <Loader/> */}
    <Routes>
    <Route path="/" element={<SharedLayout/>}>
      <Route index element={<HomePage />} />
      <Route path="/teachers" element={<TeachersPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </>
  )
}

export default App
