import axios from 'axios';

const USER_BASE_URL = 'http://'+process.env.REACT_APP_EC2IP+':5000'
const headers = {
    "Content-type":'application/json'
}

class Userservice{
    getec2instances(){
        return axios.get(USER_BASE_URL+"/get-instances",{headers:headers});
    }
    gets3buckets(){
        return axios.get(USER_BASE_URL+"/get-s3buckets",{headers:headers});
    }
    poststartinstance(id){
        return axios.post(USER_BASE_URL+"/start-instance/"+id , {headers:headers});
    }
    poststopinstance(id){
        return axios.post(USER_BASE_URL+"/stop-instance/"+id , {headers:headers});
    }
    postterminateinstance(id){
        return axios.post(USER_BASE_URL+"/terminate-instance/"+id , {headers:headers});
    }
    postcreateinstance(details){
        return axios.post(USER_BASE_URL+"/create-instance",details , {headers:headers});
    }
    posts3createinstance(name){
        return axios.post(USER_BASE_URL+"/create-s3bucket/"+name , {headers:headers});
    }
}

export default new Userservice();