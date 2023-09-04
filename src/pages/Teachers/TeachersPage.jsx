import { Teachers } from "../../components/Teachers/Teachers"

export const TeachersPage =({isAuth})=>{
    return(
        <>
          <Teachers isAuth={isAuth}/>  
        </>
    )
}