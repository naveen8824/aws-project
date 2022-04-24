import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route } from 'react-router-dom';
import './App.css';
import EC2 from './Components/EC2/EC2';
import EC2createform from './Components/Forms/EC2createform';
import EC2form from './Components/Forms/EC2form';
import EC2stopform from './Components/Forms/EC2stopform';
import EC2terminateform from './Components/Forms/EC2terminate';
import S3createform from './Components/Forms/S3createform';
import Home from './Components/Home/Home';

import S3 from './Components/S3/S3';
import Success from './Components/Success/Success';

function App() {
  return (
    <div>
     
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/ec2" element={<EC2/>}></Route>
        <Route path="/s3" element={<S3/>}></Route>
        <Route path='/success' element={<Success/>}></Route>
        <Route path='/ec2-form' element={<EC2form/>}></Route>
        <Route path='/ec2-stop-form' element={<EC2stopform/>}></Route>
        <Route path='/ec2-terminate-form' element={<EC2terminateform/>}></Route>
        <Route path='/ec2-create-form' element={<EC2createform/>}></Route>
        <Route path='/s3-create-form' element={<S3createform/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
