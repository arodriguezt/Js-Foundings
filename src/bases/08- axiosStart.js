import axios from "axios"

const API_KEY = "Z3oQtJQZS51HbN5OSyLF2twkoO0Xzico";
//https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}

const giphyApi = axios.create({
    baseURL:'https://api.giphy.com/v1/gifs',
    params:{
        api_key: API_KEY
    }
})

export default giphyApi

/*giphyApi.get('/random')
    .then(resp=>{

        const { data} = resp.data
        const {url} = data.images.original

        const img = document.createElement('img')
        img.src = url 
        document.body.append(img)
    })*/