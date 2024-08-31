import axios from "axios";

const createMessageUrl = 'https://backend-c469.onrender.com/api/messages/send';
const allMessagesUrl = 'https://backend-c469.onrender.com/api/messages/all';
const deleteMessagesUrl = 'https://backend-c469.onrender.com/api/messages/';

const create = async (newMessageObject) => {
    try {
        const response = await axios.post(createMessageUrl, newMessageObject);
        console.log("reponse:", response.data);
        console.log('Message Sent successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        console.error('Error in messageServices create method:', error);
        throw error; // Re-throwing the error to handle it in the component
    }
}

const getAll = async () => {
    try {
        const response = await axios.get(allMessagesUrl);
       
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const remove = async (id) => {
    console.log('The ID logged from messageServices', id)
    try {
        const response = await axios.delete(`${deleteMessagesUrl}/${id}`);
        console.log('The Response data from delete',response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default { getAll, create, remove };
