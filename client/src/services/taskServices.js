import axios from "axios";
// const apiUrl = process.env.REACT_APP_API_URL
const apiUrl = "https://todo.manrodri.com/api/tasks";

export function getTasks() {
    console.log("apiURL ---> ", apiUrl)
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
