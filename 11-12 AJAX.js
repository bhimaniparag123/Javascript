document.getElementById('btn').addEventListener('click', ()=>{
    let Dogimages = document.getElementById('dog-images');

    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
        if(response.status == 200){
            //consol.log(response)
            return response.json();
        }
    })
    .then((data)=> {
        console.log(data)
        let img = document.createElement('img');
            img.setAttribute('src', data.message)
            img.style.height = "200px"
            img.style.width = "315px"
            // DOgimages.AppendChild(img)
            Dogimages.prepend(img)
    })
    .catch((err) => {
        console.log(err);
    })
})