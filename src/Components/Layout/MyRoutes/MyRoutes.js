import React from "react"
import { Routes, Route} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Tables from '../Pages/Tables/Tables'
import Billing from '../Pages/Billing/Billing'
import Signin from '../Pages/Registration/Signin'
import Signup from '../Pages/Registration/Signup'
import Profile from '../Pages/Registration/Profile'
 
const MyRoutes = () => {
 return(
    <>
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/tables" element={<Tables/>} />
            <Route path="/Billing" element={<Billing/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/profile" element={<Profile/>} />
            
            
        </Routes>  
    </>     
 )
}

export default MyRoutes