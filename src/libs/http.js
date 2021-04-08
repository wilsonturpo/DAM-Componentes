
class http{
    static instance = new http();

    get = async (url) =>{
        try{
            let req = await fetch(url);
            let json = await req.json();

            return json;

        }catch(err){
            console.log("Http GET method", err);
            throw Error(err);
        }
    }

    post = async (url, body) =>{
        try{
            let req = await fetch(url,{
                method:"POST",
                body
            });
            let json = await req.json();

            return json;

        }catch(err){
            console.log("Http POST method", err);
            throw Error(err);
        }
    }
}

export default http;