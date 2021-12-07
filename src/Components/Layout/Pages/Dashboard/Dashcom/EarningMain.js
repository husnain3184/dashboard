import EarningMainjson from './EarningMainjson'

const EarningMain = () =>{
    console.log(EarningMainjson);
    return(
        <>
         <div className="row">
            {
                EarningMainjson.map((items,key)=>{
                    return(
                        <>
                            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4" id={key} key={key}>
                                <div className="card">
                                    <div className="card-header p-3 pt-2">
                                    <div className={`icon icon-lg icon-shape shadow-dark text-center border-radius-xl mt-n4 position-absolute ${items.iconscolor}`}>
                                        <i className="material-icons opacity-10">{items.materialicons}</i>
                                    </div>
                                    <div className="text-end pt-1">
                                        <p className="text-sm mb-0 text-capitalize">{items.TodayMoneytext}</p>
                                        <h4 className="mb-0">{items.TodayMoney}</h4>
                                    </div>
                                    </div>
                                    <hr className="dark horizontal my-0"/>
                                    <div className="card-footer p-3">
                                    <p className="mb-0"><span className="text-success text-sm font-weight-bolder">{items.Laskweektext} </span>{items.Laskweek}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }

         </div>
        </>
)}
export default EarningMain