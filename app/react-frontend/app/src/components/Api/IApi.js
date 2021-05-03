import axios from 'axios'

async function IApi(method, url, data=null) {
    try {
        const res = await axios({method: method, url: url, data:data});
        console.log("Status Code:", res.status);
        console.log("DATA:", data)
        return {"status":res.status, "data": res.data};
    } catch (error) {
        console.log("ERROR MESSAGE:", error.message)
        console.log("ERROR DATA:", error.response.data)
        console.log("ERROR HEADERS:", error.response.headers)
        console.log("ERROR REQUYEST:", error.request)
        console.log("DATA:", data)
        console.log("URL", url)
        console.log("method", method)
        return {"status": error.response.status, "data": error.message}
    }
}


export default IApi;