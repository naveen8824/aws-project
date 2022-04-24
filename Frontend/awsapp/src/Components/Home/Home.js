import { Link } from "react-router-dom";
import './Home.css'
const Home = ()=>{
    return(
        <div>
           
           <div className="div1">
            <div className="card-header">WELCOME TO AWS HOME PAGE</div>
            <div className="card-body">
                <h5 class="card-title">Acess the following AWS services:</h5>
                <Link to={'/ec2'} className="btn btn-warning">EC2 Service</Link>
                <br/>
                <br/>
                <Link to={'/s3'} className="btn btn-warning">S3 Service</Link>
            </div>
            </div>

           
        </div>
           
           
    );
}
export default Home;