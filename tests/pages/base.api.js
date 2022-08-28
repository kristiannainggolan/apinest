import dotenv from 'dotenv';
import axios from 'axios';
import querySting from 'querystring';

dotenv.config();

const BaseAPI = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        "content-type": "application/x-www-form-urlencoded",
        accept: "application/json"
    },
    transformRequest: [
        function(data){
            return querySting.stringify(data)
        }
    ],
    validateStatus: function(){
        return true;
    }
});

export default BaseAPI;