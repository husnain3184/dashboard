import React,{useState, useEffect} from "react"
import SideNavHeader from './SidebarCompo/SideNavHeader'
import NavbarCollapse from './SidebarCompo/NavbarCollapse'
import SideNavFooter from './SidebarCompo/SideNavFooter'


const Sidebar = () =>{

        if(window.location.pathname === "/signin"){
           
            return null;
        }

   
    return(
        <>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
              <SideNavHeader/>
              <NavbarCollapse/>
              <SideNavFooter/>    
          </aside>
        </>
    )

}
    
export default Sidebar