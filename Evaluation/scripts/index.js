const url =  `https://masai-mock-api.herokuapp.com/coffee/menu`;

fetch(url).then(function(response){
    return response.json();
}).then(function(response){
    console.log(response);
    display(response.menu.data)
})

        let array =JSON.parse(localStorage.getItem("coffee"))||[]
        let total = array.length;
        let item_div = document.querySelector("#coffee_count");
        item_div.innerText=total

function display(data){
    data.forEach(function(el){
        var div = document.createElement("div")
        let itemimage=document.createElement("img");
        itemimage.src=el.image;
        let itemName=document.createElement("h2");
        itemName.innerText=el.title;
        let itemprice=document.createElement("h2");
        itemprice.innerText="RS"+" "+el.price;

        let bukbutton = document.createElement("button")
        bukbutton.innerText="Add to Bucket"
        bukbutton.setAttribute("id","add_to_bucket")
        bukbutton.addEventListener("click",function(){
            addtobucket(el);
        })

        div.append(itemimage,itemName,itemprice,bukbutton)
        console.log(div)
        document.querySelector("#menu").append(div)
    
    })
    function addtobucket(el){
        array.push(el)
        localStorage.setItem("coffee",JSON.stringify(array))
        let total = array.length;
        let item_div = document.querySelector("#coffee_count");
        item_div.innerText=total
       


    }
}