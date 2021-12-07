import EarningMain from './Dashcom/EarningMain'
import WebVeiws from './Dashcom/Projects/Project'
import Projects from './Dashcom/WebVeiws'


const Dashboard = () =>{
    return(
        <>
         <div className="container-fluid py-4">
                <EarningMain/>
                <Projects/>
                <WebVeiws/>
            </div>
        </>
    )
}
export default Dashboard