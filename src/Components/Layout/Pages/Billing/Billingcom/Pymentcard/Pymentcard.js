const Pymentcard = () =>{
	return(
		<>
	     <div className="col-xl-6">
              <div className="row">
                <div className="col-md-6 col-6">
                  <div className="card">
                    <div className="card-header mx-4 p-3 text-center">
                      <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">
                        <i className="material-icons opacity-10">account_balance</i>
                      </div>
                    </div>
                    <div className="card-body pt-0 p-3 text-center">
                      <h6 className="text-center mb-0">Salary</h6>
                      <span className="text-xs">Belong Interactive</span>
                      <hr className="horizontal dark my-3"/>
                      <h5 className="mb-0">+$2000</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="card">
                    <div className="card-header mx-4 p-3 text-center">
                      <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">
                        <i className="material-icons opacity-10">account_balance_wallet</i>
                      </div>
                    </div>
                    <div className="card-body pt-0 p-3 text-center">
                      <h6 className="text-center mb-0">Paypal</h6>
                      <span className="text-xs">Freelance Payment</span>
                      <hr className="horizontal dark my-3"/>
                      <h5 className="mb-0">$455.00</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
		</>
		)
}
export default Pymentcard
