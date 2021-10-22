import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-new-8b138-default-rtdb.firebaseio.com/'
})