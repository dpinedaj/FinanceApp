import axios from 'axios'

async function IApi(method, url, data=null) {
    try {
        //const heads = {"Access-Control-Allow-Origin": "*"};
        const res = await axios({method: method, url: url, data:data});
        console.log("Status Code:", res.status);
        console.log("DATA:", data)
        return {"status":res.status, "data": res.data};
    } catch (error) {
        console.log("ERROR:", error)
        console.log("DATA:", data)
        console.log("URL", url)
        console.log("method", method)
    }
}


export default IApi;