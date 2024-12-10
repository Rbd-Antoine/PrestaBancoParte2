import axios from "axios";

const Evaluacion1BackendServer = "localhost";
const Evaluacion1BackendPort = "8080";

console.log(Evaluacion1BackendServer)
console.log(Evaluacion1BackendPort)

export default axios.create({
    baseURL: `http://${Evaluacion1BackendServer}:${Evaluacion1BackendPort}`,
    headers: {
        'Content-Type': 'application/json'
    }
});
