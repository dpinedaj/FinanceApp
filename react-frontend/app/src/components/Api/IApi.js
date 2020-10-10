import axios from 'axios'

async function IApi(method, url, data=null) {
    try {

        const res = await axios({method: method, url: url, data:data});
        console.log("Status Code:", res.status);
        return {"status":res.status, "data": res.data};
    } catch (error) {
        console.log("ERROR:", error)
        console.log("DATA:", data)
    }
}


export default IApi;