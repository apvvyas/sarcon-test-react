import service from './service.js';


export const getList = async () => {
    return await service.get('entries').then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error);
    })
}