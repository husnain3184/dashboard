import WebVeiwsjson from "./WebVeiwsjson"

const WebVeiws = () =>{
    console.log(WebVeiwsjson)
    return(
        <>
          <div className="row mt-4">
                {
                    WebVeiwsjson.map((items,key)=>{
                        return(
                            
                            <div className="col-lg-4 col-md-6 mt-4 mb-4" id={key} key={key}>
                                <div className="card z-index-2 ">
                                    <div className={`card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent ${items.iconscolor}`}>
                                        <div className="border-radius-lg py-3 pe-1">
                                            <div className="chart">
                                                <canvas id={items.canvasId} className="chart-canvas" height="170"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="mb-0 ">{items.WebsiteViews}</h6>
                                        <p className="text-sm ">{items.LastCampaign}</p>
                                        <hr className="dark horizontal"/>
                                        <div className="d-flex ">
                                        <i className="material-icons text-sm my-auto me-1">schedule</i>
                                        <p className="mb-0 text-sm">{items.campaignsent}</p>
                                        </div>
                                    </div>
                            </div>
                            </div>
                            
                        )
                    })
                }
            </div>

                        {/* <div className="col-lg-4 col-md-6 mt-4 mb-4">
                        <div className="card z-index-2  ">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                            <div className="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                                <div className="chart">
                                <canvas id="chart-line" className="chart-canvas" height="170"></canvas>
                                </div>
                            </div>
                            </div>
                            <div className="card-body">
                            <h6 className="mb-0 "> Daily Sales </h6>
                            <p className="text-sm "> (<span className="font-weight-bolder">+15%</span>) increase in today sales. </p>
                            <hr className="dark horizontal"/>
                            <div className="d-flex ">
                                <i className="material-icons text-sm my-auto me-1">schedule</i>
                                <p className="mb-0 text-sm"> updated 4 min ago </p>
                            </div>
                            </div>
                        </div>
                        </div> */}

                        {/* <div className="col-lg-4 mt-4 mb-3">
                        <div className="card z-index-2 ">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                            <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                                <div className="chart">
                                <canvas id="chart-line-tasks" className="chart-canvas" height="170"></canvas>
                                </div>
                            </div>
                            </div>
                            <div className="card-body">
                            <h6 className="mb-0 ">Completed Tasks</h6>
                            <p className="text-sm ">Last Campaign Performance</p>
                            <hr className="dark horizontal"/>
                            <div className="d-flex ">
                                <i className="material-icons text-sm my-auto me-1">schedule</i>
                                <p className="mb-0 text-sm">just updated</p>
                            </div>
                            </div>
                        </div>
                        </div> */}
                    
        </>
    )
}
export default WebVeiws