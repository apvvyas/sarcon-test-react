import service from './service.js';


export const activateJoinAsAudience = async (id) => {
    return await service.post('admin/activate/join-as-audience/'+id).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error);
    })
}

export const activateJoinAsSpeaker = async (id) => {
    return await service.post(`admin/activate/join-as-speaker/`+id).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error);
    })
}

export const activateAddToCalendar = async (id) => {
    return await service.post(`admin/activate/add-to-calendar/`+id).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error);
    })
}

export const activateAddToMySchedule = async (id) => {
    return await service.post(`admin/activate/add-to-my-schedule/`+id).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error);
    })
}