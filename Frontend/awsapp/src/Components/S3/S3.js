import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import userservices from '../services/userservices';
import './S3.css'
const S3 = ()=>{
    const [show, setShow] = useState(false)
    const [data , setData] = useState()
    const navigate = useNavigate()
    const buttonClickHandler= ( (e) =>{
        e.preventDefault();
        userservices.gets3buckets()
            .then((res)=>{
            if(res.status === 200){
                setShow(true);
                setData(res.data)
                
            }
        })
    });
    const createbuttonClickHandler=((e)=>{
        e.preventDefault();
        navigate('/s3-create-form');
      })
    return(
        <div>
            <div className='heading'>
                <h1> Availabe S3 Services</h1>
            </div>
            <div className='s3'>
            { show ? (navigate('/success' , {state:{message: JSON.stringify(data)}})) : 
            (<button type = "button" onClick={buttonClickHandler} className="btn btn-warning">
                Get S3 Buckects
            </button>)}
            <br/>
            <br/>
            <button type = "button" onClick={createbuttonClickHandler} className="btn btn-warning">
                Create S3 bucket
            </button>
            </div>
        
        </div>
        
    );
}
export default S3;