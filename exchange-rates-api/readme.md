request for data 
endpoints
    localhost:5000/api/exchange-rates/get-exchange-rates 
    method: post
    post body : {
            code:"USD" -> any data that is required
            }

    response : {
        result : {
            "USD" : 1
            ...
            ...
            ...
        }
    }

    localhost:5000/api/exchange-rates/get-exchange-codes
    method: get
    response:{
        result : [[code,country name],.....]
    }


