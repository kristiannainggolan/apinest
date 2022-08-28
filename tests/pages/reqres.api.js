import BaseAPI from '$root/pages/base.api'

const ReqresAPI = {
    register: (data) => BaseAPI.post('/register', data),
    login:(data) => BaseAPI.post('/login', data),
    update:(data) => BaseAPI.put('/users/2', data),
    patch:(data) => BaseAPI.patch('/users/2', data),
    list:() => BaseAPI.get('/unknown'),
    delete:() => BaseAPI.delete('/users/2')
}

export default ReqresAPI;