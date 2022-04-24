import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import userservices from '../services/userservices';
import Success from '../Success/Success';
import './EC2.css'
function EC2() {
  const [show, setShow] = useState(false)
  const [data , setData] = useState("")
  const navigate = useNavigate();
  
  const getbuttonClickHandler= ( (e) =>{
      e.preventDefault();
      userservices.getec2instances().then((res)=>{
          if(res.status === 200){
              setShow(true);
              setData(res.data);
          }
      })
  });

  const startbuttonClickHandler=((e)=>{
    e.preventDefault();
    navigate('/ec2-form');
  })
  const stopbuttonClickHandler=((e)=>{
    e.preventDefault();
    navigate('/ec2-stop-form');
  })
  const terminatebuttonClickHandler=((e)=>{
    e.preventDefault();
    navigate('/ec2-terminate-form');
  })
  const createbuttonClickHandler=((e)=>{
    e.preventDefault();
    navigate('/ec2-create-form');
  })
  
  return (
  //   <div>
  //     { show ? (<p> {JSON.stringify(data)} </p>) : 
  //      (<button type = "button" onClick={buttonClickHandler} className="btn btn-primary">
  //      Get EC2 instances
  //  </button>)}
  //   </div>
      <div>
        <div className='heading'>
          <h1> Availabe EC2 Services</h1>
        </div>
        <div className='EC2'>
        { show ? (navigate('/success' , {state:{message: JSON.stringify(data)}})) : 
        (<button type = "button" onClick={getbuttonClickHandler} className="btn btn-warning">
            Get EC2 instances
        </button>)}

            <br/>
            <br/>

            
          <button type = "button" onClick={startbuttonClickHandler} className="btn btn-warning">
              Start EC2 instances
          </button>)
            <br/>
            <br/>

          <button type = "button" onClick={stopbuttonClickHandler} className="btn btn-warning">
            Stop EC2 Instances
          </button>
            <br/>
            <br/>

          <button type = "button" onClick={terminatebuttonClickHandler} className="btn btn-warning">
            Terminate EC2 Instances
          </button>
            <br/>
            <br/>

            <button type = "button" onClick={createbuttonClickHandler} className="btn btn-warning">
              Create EC2 Instances
            </button>
        </div>
        




        
      </div>
  );
}

export default EC2;
