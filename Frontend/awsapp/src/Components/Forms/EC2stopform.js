import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userservices from "../services/userservices";

function EC2stopform(){
    const[id , setId] = useState("")
    const navigate = useNavigate();
    const formsubmithandler = ((e)=>{
        e.preventDefault();
        userservices.poststopinstance(id).then((res)=>{
          navigate('/success' , {state:{message:JSON.stringify(res.data)}});  
        })
    });
    return(
        <div>
            <form method="post" onSubmit={formsubmithandler}>
                <label>
                    Instance ID:
                    <input name="id" onChange={event => setId(event.target.value)}></input>
                </label>

                <br/>
                <input type="submit" className="btn btn-primary" value="Stop Instance" ></input>
            </form>
        </div>
    )
}
export default EC2stopform;