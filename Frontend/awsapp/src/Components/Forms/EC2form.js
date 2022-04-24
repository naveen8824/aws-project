import { useState } from "react";
import userservices from "../services/userservices";
import { useNavigate } from "react-router-dom";

function EC2form(){
    const[id , setId] = useState("")
    const navigate = useNavigate();
    const formsubmithandler = ((e)=>{
        e.preventDefault();
        userservices.poststartinstance(id).then((res)=>{
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
                <input type="submit" className="btn btn-primary" value="Start Instance" ></input>
            </form>
        </div>
    )
}
export default EC2form;