const API_KEY = "Z3oQtJQZS51HbN5OSyLF2twkoO0Xzico";
//https://api.giphy.com/v1/gifs/random?api_key=Z3oQtJQZS51HbN5OSyLF2twkoO0Xzico

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
    .then(resp=>resp.json())
    .then(({data}) =>{
        const {url} = data.images.original

        const img= document.createElement('img')
        img.src= url

        document.body.append(img)
    })
