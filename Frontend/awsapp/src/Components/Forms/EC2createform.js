import { useState } from "react";
import userservices from "../services/userservices";
import { useNavigate } from "react-router-dom";

function EC2createform(){
    const[id , setId] = useState("");
    const[name,setName]=useState("");
    const[instanceType , setInstanceType] = useState();
    const navigate = useNavigate();
    const formsubmithandler = ((e)=>{
        e.preventDefault();
        userservices.postcreateinstance(
            {
                'name':name,
                'id':id,
                'instanceType':instanceType
            }
        ).then((res)=>{
            navigate('/success' , {state:{message:JSON.stringify(res.data)}});  
        })
    });
    return(
        <div>
            <form method="post" onSubmit={formsubmithandler}>
                <label>
                    Image ID:
                    <input name="id" onChange={event => setId(event.target.value)}></input>
                </label>

                <br/>
                <label>
                    Name:
                    <input name="name" onChange={event => setName(event.target.value)}></input>
                </label>
                <br/>
                <label>
                    Instance Type:
                    <input name="instance-type" onChange={event => setInstanceType(event.target.value)}></input>
                </label>
                <br/>
                <input type="submit" className="btn btn-primary" value="Create Instance" ></input>
            </form>
        </div>
    )
}
export default EC2createform;