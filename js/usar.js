function consumirAPI(){
    
    var apikey = "0eef670bf55c806c612c6ad2b8a68b29";
     var ts = "1000";
      var hash = "af026adb1907d8b2845b08a1e42116f7";
       var url = 'https://gateway.marvel.com/v1/public/characters?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash; 
     
    console.log(url)

    var marco = document.getElementById("marco")
    
    fetch(url)
      .then(response => response.json())
        .then(json => { 

          for (item of json.data.results){ 

            console.log(item.name)

        var div = document.createElement("div");

        var img = document.createElement("img");
                img.src = item.thumbnail.path + "." + item.thumbnail.extension;
            
            var label = document.createElement("label")
                label.innerText = item.name
            var sinopsis = document.createElement("p")
            if  (item.description != ""){
                sinopsis.innerText = item.description
            }else{
              sinopsis.innerText = "NULL"
            }
             
               

              
              var linkLaseries = document.createElement("a");
              linkLaseries.innerText = "Series";
              linkLaseries.href = "html/series.html?juan=" + item.series.collectionURI;
              div.appendChild(linkLaseries);

                var linkElcomic = document.createElement("a");
                linkElcomic.innerText = "Comic";
                linkElcomic.href = "html/comics.html?juan=" + item.comics.collectionURI;
                div.appendChild(linkElcomic);

                    var linkElevento = document.createElement("a");
                    linkElevento.innerText = "Evento";
                    linkElevento.href = "html/eventos.html?juan=" + item.events.collectionURI;
                    div.appendChild(linkElevento);



                    div.appendChild(label)
                    div.appendChild(img);
                    div.appendChild(sinopsis)
                    marco.appendChild(div)
                    div.appendChild(linkLaseries)
                    div.appendChild(linkElcomic)
                    div.appendChild(linkElevento)
        
        
  }
});
}

function serieM(){

  const facUrl = window.location.search;
  
  const factorUrl = new URLSearchParams(facUrl);
  
  const ruta = factorUrl.get("juan")
  var url = convertirHTTPS(ruta)
  
  console.log(url);
  
  var juan = document.getElementById("juan")
  
  fetch(url)
        .then(response => response.json())
          .then(json => { 
  
            for (item of json.data.results){
          
              console.log(item.title);
              console.log(item.urls[0].url)
  
              var title = document.createElement("p")
              title.innerText = item.title
          
          
              juan.appendChild(title)
              var link = document.createElement("a")
              link.innerText = item.urls[0].url
  
              juan.appendChild(link)
  
        
          
          
          
          }
  
   })
  
  }





function ComicM(){

const facUrl = window.location.search;

const factorUrl = new URLSearchParams(facUrl);

const ruta = factorUrl.get("juan")
var url = convertirHTTPS(ruta)

console.log(url);

var juan = document.getElementById("juan")

fetch(url)
      .then(response => response.json())
        .then(json => { 

          for (item of json.data.results){
        
            console.log(item.title);
            console.log(item.urls[0].url)

            var title = document.createElement("p")
            title.innerText = item.title
        
        
            juan.appendChild(title)
            var link = document.createElement("a")
            link.innerText = item.urls[0].url

            juan.appendChild(link)

       }
 })
}

function EventoM(){

  const facUrl = window.location.search;
  
  const factorUrl = new URLSearchParams(facUrl);
  
  const ruta = factorUrl.get("juan")
  var url = convertirHTTPS(ruta)
  
  console.log(url);
  
  var juan = document.getElementById("juan")
  
  fetch(url)
        .then(response => response.json())
          .then(json => { 
  
            for (item of json.data.results){
          
              console.log(item.title);
              console.log(item.urls[0].url)
  
              var title = document.createElement("p")
              title.innerText = item.title
          
          
              juan.appendChild(title)
              var link = document.createElement("a")
              link.innerText = item.urls[0].url
  
              juan.appendChild(link)
  
        
          
          
          
          }
  
   })
  
  }

  const convertirHTTPS = (urlInsegura) => {
    const apikey = "d02d24bf6dfa0237da3b078f68f3af7f";
    const ts = "1000";
    const hash = "df75a5609e669b1d569d2dfbe2f0688b";
    
    const urlSegura = `https://${urlInsegura.slice(7)}?ts=${ts}&apikey=${apikey}&hash=${hash}`;
  
    return urlSegura;
  }