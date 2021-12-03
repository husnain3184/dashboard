const SideNavHeader = () =>{
return(
    <>
        <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                      <img src="./assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo"/>
                      <span className="ms-1 font-weight-bold text-white">Material Dashboard 2</span>
                    </a>
              </div>
            <hr className="horizontal light mt-0 mb-2"/>
    </>
)
}
export default SideNavHeader;