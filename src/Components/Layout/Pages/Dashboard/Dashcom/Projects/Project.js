import ProjectsList from './ProjectList'
import Ordersoverview from './Ordersoverview'

const Projects = () =>{
    return(
        <>
            <div className="row mb-4">
             <ProjectsList/>
             <Ordersoverview/>
            </div>
        </>
    )
}
export default Projects