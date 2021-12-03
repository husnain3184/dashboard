import React from "react"
import { Routes, Route} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Tables from '../Pages/Tables/Tables'
 
const MyRoutes = () => {
 return(
    <>
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/tables" element={<Tables/>} />
            
        </Routes>  
    </>     
 )
}

export default MyRoutes