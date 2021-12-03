import NavbarMain from './MainCopo/HeaderFooter/NavbarMain'
import Footer from './MainCopo/HeaderFooter/Footer'
import Sidebar from './MainCopo/Sidebar/Sidebar'
import MyRoutes from '../MyRoutes/MyRoutes'



const Main = () =>{
    return(
        <>
            <Sidebar/>
           <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <NavbarMain/>
            <MyRoutes/>
            <Footer/>
        </main>
        </>
    )
}
export default Main