
let id;

let movies_div = document.getElementById('movies');

let container = document.getElementById('container');

async function movies(q){
    let url = `https://www.omdbapi.com/?s=${q}&apikey=c8123887`;

    try{
        let res = await fetch(url);

        let data = await res.json();
        // console.log(data);
        return data.Search;
    }catch(err){
        console.log('err',err);
    }
}

function append(movies){
    movies_div.innerHTML = null;
    if(movies === undefined){
        return false;
    }
    movies.forEach(function(ele){
        let p = document.createElement("p");
        p.innerText = ele.Title;

        movies_div.append(p);
    })

}

async function main(q){
    let query = document.getElementById('query').value;
    // console.log(query)

    let response = movies(query);
    let data = await response;
    append(data);
    console.log('data',data);

}

function debounce(func, delay){
    if(id){
        clearTimeout(id);
    }

    id = setTimeout(function(){
        func();
    }, 1000)
}

document.querySelector('#movies').addEventListener("click", myFunction);

function myFunction(){


    let container = document.getElementById('container');
    // movies.forEach(function(ele){
        let p = document.createElement("p");
        p.innerText = movies.Title;

        container.append(p)

    // let movieArr = JSON.parse(localStorage.getItem('movie')) ||  [];

    // let m = document.getElementById('movies').append();
    // console.log(m);

    // movieArr.push(m);
    // console.log(movieArr);

    // localStorage.setItem("movie",JSON.stringify(movieArr));
}





function appendData(movies){
    // console.log("callFun")
    let container = document.getElementById('container');
    // movies.forEach(function(ele){
        let p = document.createElement("p");
        p.innerText = movies.Title;

        container.append(p)

    // })
    console.log(movies);


    
}

