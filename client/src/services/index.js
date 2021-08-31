import axios from 'axios';

class dataService {
    getAllData(){
        return axios.get('http://localhost:8000/users/show');
    }

    create(data){
        return axios.post("http://localhost:8000/users/create", data);
    }
    updateDataById(data, dataId){
        return axios.put("http://localhost:8000/users/edit/"+ dataId, data);
    }

    deleteDataById(dataId){
        return axios.delete("http://localhost:8000/users/delete/" + dataId);
    }
}

export default new dataService()