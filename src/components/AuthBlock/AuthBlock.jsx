import { Registration } from "../Registration/Registration";
import { Logout } from "../Logout/Logout";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/auth/authOperation";
import { resetAll } from "../../redux/Teachers/teacherOperation";
export const AuthBlock=({isAuth, handleModalWindowOpen, setRegister})=>{
    
    const dispatch =useDispatch()
    const logout = () => {
        dispatch(logOutUser());
        dispatch(resetAll())
      };

    return (
        <>
            {!isAuth && (
            <Registration
              openModal={handleModalWindowOpen}
              setform={setRegister}
            />
          )}
          {isAuth && <Logout logout={logout} />}
        </>
    )
}