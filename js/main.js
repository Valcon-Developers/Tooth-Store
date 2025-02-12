
let sectionProducts=document.getElementById('products');


function card(i){
    return(
        `
        
        <div class="card  text-dark card-product search-card mt-1" style="border:solid 2px #17a2b8; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); grid-gap: 10px; max-height: 390px;">
            <div class="card-img img-fluid text-center" onclick="showDetailes(${i})" style="height: 200px; overflow:hidden;">
                <img src=${products[i].source} alt=""  style=" ">
            </div>
            <div class="card-body" onclick="showDetailes(${i})" style="display: flex; flex-direction: column; justify-content: space-between;margin-top:-40px">
                <div class="card-title search-title">${products[i].title}</div>
                <div class="card-text h5">${products[i].price} EGP</div>
            </div>
            <div class="container">
                <div class="btn btn-outline-info w-100 mx-auto mb-2" style="border-radius:10px;" onclick="addToCart(${i})">
                    Add To Cart <i class="fa-solid fa-cart-plus"></i>
                </div>
            </div>
        </div>
        `);
}


document.addEventListener("DOMContentLoaded", function() {
    let sectionProducts = document.getElementById('products');
    if (sectionProducts) {
        for (let i = 0; i < products.length; i++) {
            sectionProducts.innerHTML += card(i); // إضافة كل منتج
        }
    }
});



function showDetailes(id){
    window.location.href=`detailes.html?id=${id}`;    
}

document.addEventListener("DOMContentLoaded", function() {
    let queryParams = new URLSearchParams(window.location.search);
    let productId = queryParams.get('id');
    get_cart_number();
    if (productId !== null) {
        productId = parseInt(productId);
        let product = products[productId];

        if (product) {
            let Detalies = document.getElementById('Detailes');
            Detalies.innerHTML = `
                <div class="container w-100">
                    <div class="box d-flex flex-wrap">
                        <div class=" col-lg-6 img pt-5 pd-0 mb-0"><img src="${product.source}" alt="" style="width: 300px;"></div>
                        <div class="col-lg-6 detailes mb-5 pt-5 w-100">
                            <h2 class="title">${product.title}</h2> <hr>
                            <h4 class="description">${product.description}</h4><hr class="text-danger">
                            <div class="price badge badge-success mb-3"><h1>${product.price} EGP</h1></div> <hr>
                            <div class="btn btn-info d-block" onclick="addToCart(${productId})">Add To Cart</div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
});


///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////




function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(products[productId]);
    localStorage.setItem('cart', JSON.stringify(cart));
    let count = JSON.parse( localStorage.getItem('cart') )
    get_cart_number();
}





function cartProduct(cartProducts,id){
    return`
      <div class="box d-flex  w-100 pt-5 pb-3 text-dark" style="border-bottom:2px black solid ;">
                    <img src="${cartProducts[id].source}" width="100px" alt="" class="" style="border-radius: 20px;">
                    <div class="boxBody pl-5 col-7">
                        <h4 class="title">${cartProducts[id].title}</h4>
                        <div class="price"> price : ${cartProducts[id].price}</div>
                    </div>
                    <div class="btn btn-outline-danger mt-5"  style="height: 40px;"   onclick= "removecart(${id})" >Remove</div>
            
                </div>
                `
}



function showcart(){
    let cartcontent=document.getElementById('cartcontent');
    let cartProducts = JSON.parse(localStorage.getItem('cart'));
   if(cartProducts){
    for(let i=0;i<cartProducts.length;i++){
           cartcontent.innerHTML+=cartProduct(cartProducts,i);
           
    }
}


}


function removecart(id){
let cartProducts = JSON.parse(localStorage.getItem('cart'));

cartProducts.splice(id,1)
localStorage.setItem('cart',JSON.stringify(cartProducts))
let cartcontent=document.getElementById('cartcontent');
cartcontent.innerHTML="";
 showcart();
 getTotal();
 get_Products_input_names();
 get_cart_number();

}

function getTotal(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];   
    let result=0;
    for(let i=0; i<cart.length;i++){
          result +=cart[i].price
    }
    let total = document.getElementById('total');
    total.innerHTML=`Total : ${result} EGP`;
}




function get_cart_number(){
    if(localStorage.getItem('cart')){
        let count = JSON.parse( localStorage.getItem('cart') )
        document.getElementById('cartCounter').innerHTML=`<i class="fa-solid fa-cart-plus h5 p-2  bg-success" style="border-radius:20px"> ${count.length} `;
      }
}

function get_Products_input_names(){
    let cart = JSON.parse(localStorage.getItem('cart')) || []; 
    let result="";
    for(let i=0; i<cart.length;i++){
          result +=cart[i].title+"\n \n  ,\n \n  ";
    }
    let input = document.getElementById('Products_input_names');
    input.value=result;
}
//////////////////////////////////////////////////////////////////////////////////////////


