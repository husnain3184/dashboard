import { Link } from 'react-router-dom'

const NavbarCollapse = () =>{
return(
    <>
        <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white active bg-gradient-primary" href="./pages/dashboard.html">
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">dashboard</i>
                    </div>
                    <span className="nav-link-text ms-1">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white " href="./pages/tables.html">
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">table_view</i>
                    </div>
                    <span className="nav-link-text ms-1">Tables</span>
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white " to="/billing">
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">receipt_long</i>
                    </div>
                    <span className="nav-link-text ms-1">Billing</span>
                  </Link>
                </li>
                <li className="nav-item mt-3">
                  <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white " href="./pages/profile.html">
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">person</i>
                    </div>
                    <span className="nav-link-text ms-1">Profile</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white " href="./pages/sign-in.html">
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">login</i>
                    </div>
                    <span className="nav-link-text ms-1">Sign In</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white " href="./pages/sign-up.html">
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">assignment</i>
                    </div>
                    <span className="nav-link-text ms-1">Sign Up</span>
                  </a>
                </li>
              </ul>
        </div>
    </>
)
}
export default NavbarCollapse;