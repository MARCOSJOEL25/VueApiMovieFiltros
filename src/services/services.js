import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3/discover/movie?api_key=84818027e746d999c36172430cbdea57',
    withCredentials:false,
    headers:{
        Accept: 'aplication/json',
        'Content-type': 'aplication/json'
    }

})

const apiOne = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search/movie/?api_key=84818027e746d999c36172430cbdea57&query=Smile',
    withCredentials:false,
    headers:{
        Accept: 'aplication/json',
        'Content-type': 'aplication/json'
    }

})



export default{
    getAllData(){
        return apiClient.get()
    },
    getOneMovie(){
        return apiOne.get()
    }
}