import EarningMain from './Dashcom/EarningMain'
import WebVeiws from './Dashcom/Project'
import Projects from './Dashcom/WebVeiws'


const Dashboard = () =>{
    return(
        <>
         <div className="container-fluid py-4">
                <EarningMain/>
                <WebVeiws/>
                <Projects/>
            </div>
        </>
    )
}
export default Dashboard