import { Navigate, Outlet } from "react-router-dom";
 const user ={
    loggedIn: false
 }

function PrivateRoutes() {
    if (!user.loggedIn) return <Navigate to='/login' />
    
    return <Outlet/>
    
}

export default PrivateRoutes