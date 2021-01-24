import axios from 'axios';


export const ShorteningAPI = {

    GetUrl(url) {
        return axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
            .then(response =>{
                return response
            })
    }
}
