import { useState } from "react";
import userservices from "../services/userservices";
import { useNavigate } from "react-router-dom";

function S3createform(){
    const[name , setname] = useState("")
    const navigate = useNavigate();
    const formsubmithandler = ((e)=>{
        e.preventDefault();
        userservices.posts3createinstance(name).then((res)=>{
            navigate('/success' , {state:{message:JSON.stringify(res.data)}});  
        })
    });
    return(
        <div>
            <form method="post" onSubmit={formsubmithandler}>
                <label>
                    Bucket Name:
                    <input name="name" onChange={event => setname(event.target.value)}></input>
                </label>

                <br/>
                <input type="submit" className="btn btn-primary" value="Create S3 Bucket" ></input>
            </form>
        </div>
    )
}
export default S3createform;