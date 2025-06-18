
let sectionProducts=document.getElementById('products');


function card(i){
    return(
        `
        
        <div class="card  text-dark card-product search-card mt-1" style="border:solid 2px #17a2b8; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); grid-gap: 10px; max-height: 390px;">
            <div class="card-img img-fluid text-center" onclick="showDetailes(${i})" style="height: 200px; overflow:hidden;">
                <img   loading="lazy"  src=${products[i].source} alt=""  style=" ">
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

    // جلب المنتج المطلوب
    let selectedProduct = products[productId];

    // البحث عن المنتج داخل السلة
    let existingProduct = cart.find(item => item.id === selectedProduct.id);

    if (existingProduct) {
        // لو المنتج موجود: زوّد الكمية
        existingProduct.amount += 1;
    } else {
        // لو المنتج جديد: ضيفه بالسلة مع amount = 1
        selectedProduct.amount = 1;
        cart.push(selectedProduct);
    }

    // حفظ التغييرات
    localStorage.setItem('cart', JSON.stringify(cart));

    // تحديث عدد السلة
    get_cart_number();
}






function cartProduct(cartProducts, id) {
    let item = cartProducts[id];
    return `
    <div class="box d-flex w-100 pt-5 pb-3 text-dark" style="border-bottom:2px black solid;">
        <img src="${item.source}" width="100px" alt="" style="border-radius: 20px;">
        <div class="boxBody pl-5 col-7">
            <h4 class="title">${item.title}</h4>
            <div class="price">price: ${item.price} EGP</div>
            <div class="amount mt-2">
                <div class="d-flex align-items-center">
                    <button class="btn btn-sm btn-warning mr-2 px-3" onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.amount}</span>
                    <button class="btn btn-sm btn-warning ml-2 px-3" onclick="increaseQuantity(${item.id})">+</button>
                </div>
                <p class="mt-2">Total: ${item.price * item.amount} EGP</p>
            </div>
        </div>
        <div class="ml-auto mr-2 btn btn-outline-danger mt-5" style="height: 40px;" onclick="removecart(${id})">
            <i class="fa-solid fa-trash"></i>
        </div>
    </div>
    `;
}
function refreshCart() {
    document.getElementById('cartcontent').innerHTML = "";
    showcart();
    getTotal();
    get_cart_number();
    get_Products_input_names();
}

function increaseQuantity(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let item = cart.find(p => p.id === productId);
    if (item) {
        item.amount += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        refreshCart();
    }
}
function decreaseQuantity(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemIndex = cart.findIndex(p => p.id === productId);

    if (itemIndex !== -1) {
        if (cart[itemIndex].amount > 1) {
            cart[itemIndex].amount -= 1;
        } else {
            cart.splice(itemIndex, 1); // حذف المنتج إذا وصلت الكمية للصفر
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        refreshCart();
    }
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

function getTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];   
    let result = 0;
    for (let i = 0; i < cart.length; i++) {
        result += cart[i].price * cart[i].amount;
    }
    let total = document.getElementById('total');
    total.innerHTML = `Total : ${result} EGP`;
}




function get_cart_number(){
    if(localStorage.getItem('cart')){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalItems = 0;
        
        for(let i = 0; i < cart.length; i++){
            totalItems += cart[i].amount || 1;  
        }
        document.getElementById('cartCounter').innerHTML=`<i class="fa-solid fa-cart-plus h5 p-2  bg-success" style="border-radius:20px"> ${totalItems} `;
      }
}

function get_Products_input_names(){
    let cart = JSON.parse(localStorage.getItem('cart')) || []; 
    let result="";
    for(let i=0; i<cart.length;i++){
          result +=`${cart[i].id}->${cart[i].title}=>${cart[i].amount};` ;
    }
    let input = document.getElementById('Products_input_names');
    input.value=result;
}
//////////////////////////////////////////////////////////////////////////////////////////


