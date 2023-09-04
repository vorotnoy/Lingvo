import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/Homepage";
import { TeachersPage } from "./pages/Teachers/TeachersPage";
import { FavoritePage } from "./pages/Favorite/FavoritePage";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { auth } from "./services/firebase/config";
import { Header } from "./components/Header/Header";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userID, setUserID] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
        const { uid } = user;
        setUserID(uid);
      } else {
        setIsLogged(false)
      }
    });
  });
  // console.log('app')
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout  isAuth={isLogged}/>}>
          <Route index element={<HomePage   isAuth={isLogged}/>} />
          <Route path="/teachers" element={<TeachersPage isAuth={isLogged} />} />
          <Route path="/favorite" element={<FavoritePage isAuth={isLogged} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
