import { useLocation } from "react-router-dom";

function Success(props){
    const {state} = useLocation();
    const{message} = state;
    console.log(message);
    return(
        <div>
            
            <h1 align="center"> LOGS </h1>
            <br/>
            <br/>
            <p>{message}</p> 
                
            
           
        </div>
    )
}
export default Success;